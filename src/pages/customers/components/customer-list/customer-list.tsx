import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel, Tooltip, IconButton, TablePagination, Paper, Grid, TextField, InputAdornment, Chip, Button, Divider, Switch } from '@material-ui/core';
import { CachedOutlined, VisibilityOutlined, DeleteOutlineOutlined, SearchOutlined, PersonAddSharp, ArrowDownwardOutlined } from '@material-ui/icons';
import { Order, stableSort, getSorting } from '../../../../utils/types';
import { ICustomerModel, CustomerData } from './customer-data';
import { CustomRouterLink } from '../../../../components/customRouterLink/customRouterLink';

interface HeadCell {
    id: keyof ICustomerModel;
    label: string;
}
const headCells: HeadCell[] = [
    { id: 'company', label: 'Company' },
    { id: 'primaryContact', label: 'Primary Contact' },
    { id: 'primaryEmail', label: 'Primary Email' },
    { id: 'phone', label: 'Phone' },
    { id: 'status', label: 'Status' },
    { id: 'groups', label: 'Groups' },
    { id: 'actions', label: 'Actions' },
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof ICustomerModel) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}
function EnhancedTableHead(props: EnhancedTableProps) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property: keyof ICustomerModel) => (event: React.MouseEvent<unknown>) => {
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

const CustomerListComponent = (props: any) => {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof ICustomerModel>('company');
    const [selected, setSelected] = React.useState<string[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof ICustomerModel) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelecteds = CustomerData.map((n) => n.company);
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



    const emptyRows = rowsPerPage - Math.min(rowsPerPage, CustomerData.length - page * rowsPerPage);

    return (
        <div className="table__list">
            <Paper elevation={3}>
                <Grid container className="table_head" alignItems="center">
                    <Grid item md={8}>
                        {/* Customer Actions */}
                        <div className="button-actions">
                            <Tooltip title="Import New Customer"><Button component={CustomRouterLink} to="/customers/create">  <PersonAddSharp /> New Customer</Button></Tooltip>
                            <Tooltip title="Import New Customer"><Button component={CustomRouterLink} to="/customers">  <ArrowDownwardOutlined /> Import Customer</Button></Tooltip>
                        </div>
                    </Grid>
                    <Grid item md={3}>
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
                    </Grid>
                    <Grid item md={1}>
                        <div className="table__list--actions">
                            <Tooltip title="Refresh">
                                <IconButton className="refresh">
                                    <CachedOutlined />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </Grid>
                </Grid>
                <Divider />
                <TableContainer>
                    <Table className="primary-table">
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={CustomerData.length}
                        />
                        <TableBody>
                            {stableSort(CustomerData, getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const labelId = `customer-checkbox-${index}`;
                                    return (
                                        <TableRow
                                            hover

                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.company}
                                        >
                                            <TableCell id={labelId} scope="row" padding="none">
                                                {row.company}
                                            </TableCell>
                                            <TableCell>{row.primaryContact}</TableCell>
                                            <TableCell>{row.primaryEmail}</TableCell>
                                            <TableCell>{row.phone}</TableCell>
                                            <TableCell>
                                                <Switch
                                                    checked={Boolean(row.status)}
                                                    name="checkedA"
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Chip label={row.groups} />
                                            </TableCell>
                                            <TableCell>
                                                <IconButton component={CustomRouterLink} to={`/customers/edit/${6545 + row.phone + 1115}`} className="view--icon">
                                                    <VisibilityOutlined />
                                                </IconButton>
                                                <IconButton className="delete--icon">
                                                    <DeleteOutlineOutlined />
                                                </IconButton>
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
                    count={CustomerData.length}
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


export const CustomerList = CustomerListComponent;