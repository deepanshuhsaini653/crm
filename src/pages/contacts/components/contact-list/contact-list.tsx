import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel, Tooltip, IconButton, TablePagination, Paper, Grid, Switch } from '@material-ui/core';
import { CachedOutlined, } from '@material-ui/icons';
import { Order, stableSort, getSorting } from '../../../../utils/types';
import { IContactModel, ContactData } from './contact-data';

interface HeadCell {
    id: keyof IContactModel;
    label: string;
}
const headCells: HeadCell[] = [
    { id: 'photoUrl', label: 'Photo' },
    { id: 'firstName', label: 'First Name' },
    { id: 'lastName', label: 'Last Name' },
    { id: 'email', label: 'Email' },
    { id: 'company', label: 'Company' },
    { id: 'phone', label: 'Phone' },
    { id: 'status', label: 'Status' },
    { id: 'position', label: 'Position' },
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IContactModel) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}
function EnhancedTableHead(props: EnhancedTableProps) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property: keyof IContactModel) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align='left'
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className="visuallyHidden">
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const ContactListComponent = (props: any) => {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof IContactModel>('company');
    const [selected, setSelected] = React.useState<string[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof IContactModel) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelecteds = ContactData.map((n) => n.company);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };



    const emptyRows = rowsPerPage - Math.min(rowsPerPage, ContactData.length - page * rowsPerPage);

    return (
        <div className="table__list">
            <Paper elevation={3}>
                <Grid container style={{ padding: "0px 15px 0" }}>
                    {/* <Grid item md={3}>
                    <TextField
                        label="Search..."
                        fullWidth
                        variant="outlined"
                        className="textField"
                        name="password"
                        value=""
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchOutlined />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid> */}
                    <Grid item md={12}>
                        <div className="table__list--actions">
                            <Tooltip title="Refresh">
                                <IconButton className="refresh">
                                    <CachedOutlined />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </Grid>
                </Grid>
                <TableContainer>
                    <Table className="primary-table">
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={ContactData.length}
                        />
                        <TableBody>
                            {stableSort(ContactData, getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <TableRow
                                            hover
                                            tabIndex={-1}
                                            key={row.phone}
                                        >
                                            <TableCell>
                                                <img className="profileImg" src={row.photoUrl} />
                                            </TableCell>
                                            <TableCell>{row.firstName}</TableCell>
                                            <TableCell>{row.lastName}</TableCell>
                                            <TableCell>{row.email}</TableCell>
                                            <TableCell>{row.company}</TableCell>
                                            <TableCell>{row.phone}</TableCell>
                                            <TableCell>{row.position}</TableCell>
                                            <TableCell>
                                                <Switch
                                                    checked={Boolean(row.status)}
                                                    name="checkedA"
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />

                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={ContactData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    className="header--menu"
                />
            </Paper>
        </div>
    )
}


export const ContactList = ContactListComponent;