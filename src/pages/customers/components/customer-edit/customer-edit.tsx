import React, { Fragment } from 'react'
import { PageHeader } from '../../../../components/page-header/page-header';
import { Box, Typography, makeStyles, Theme, Tabs, Tab, Paper } from '@material-ui/core';
import { CProfile } from './c-profile/c-profile';
import { AccountCircleOutlined, AccountCircleSharp, GroupSharp, InsertDriveFileSharp, ShowChartSharp, DescriptionSharp, TimelineSharp, NoteSharp, SpeakerNotesSharp, SubscriptionsSharp, MenuSharp, ListAltSharp, LocalOfferSharp, AttachFileSharp, LockSharp, ScheduleSharp } from '@material-ui/icons';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));


const CustomerEditComponent = (props: any) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Fragment>
            {/* Customer header */}
            <PageHeader name="Customers" title="Customers Edit" showBack={true} link="/customers" />
            {/* Customer Details */}
            <Paper elevation={1}>
                <div className="verticle-tabs">
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        className="tabs"
                    >
                        <Tab icon={<AccountCircleSharp />} label="Profile" {...a11yProps(0)} />
                        <Tab icon={<GroupSharp />} label="Contacts" {...a11yProps(1)} />
                        <Tab icon={<InsertDriveFileSharp />} label="Notes" {...a11yProps(2)} />
                        <Tab icon={<ShowChartSharp />} label="Statement" {...a11yProps(3)} />
                        <Tab icon={<DescriptionSharp />} label="Invoices" {...a11yProps(4)} />
                        <Tab icon={<TimelineSharp />} label="Payments" {...a11yProps(5)} />
                        <Tab icon={<InsertDriveFileSharp />} label="Proposals" {...a11yProps(5)} />
                        <Tab icon={<NoteSharp />} label="Credit Notes" {...a11yProps(6)} />
                        <Tab icon={<SpeakerNotesSharp />} label="Estimates" {...a11yProps(7)} />
                        <Tab icon={<SubscriptionsSharp />} label="Subscriptions" {...a11yProps(8)} />
                        <Tab icon={<DescriptionSharp />} label="Expenses" {...a11yProps(9)} />
                        <Tab icon={<InsertDriveFileSharp />} label="Contracts" {...a11yProps(10)} />
                        <Tab icon={<MenuSharp />} label="Projects" {...a11yProps(11)} />
                        <Tab icon={<ListAltSharp />} label="Tasks" {...a11yProps(12)} />
                        <Tab icon={<LocalOfferSharp />} label="Tickets" {...a11yProps(13)} />
                        <Tab icon={<AttachFileSharp />} label="Files" {...a11yProps(14)} />
                        <Tab icon={<LockSharp />} label="Vault" {...a11yProps(15)} />
                        <Tab icon={<ScheduleSharp />} label="Reminders" {...a11yProps(16)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <CProfile />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
                </TabPanel>
                    <TabPanel value={value} index={7}>
                        Item Seven
                </TabPanel>
                    <TabPanel value={value} index={8}>
                        Item Seven
                </TabPanel>
                    <TabPanel value={value} index={9}>
                        Item Seven
                </TabPanel>
                    <TabPanel value={value} index={10}>
                        Item Seven
                </TabPanel>
                    <TabPanel value={value} index={11}>
                        Item Seven
                </TabPanel>
                    <TabPanel value={value} index={12}>
                        Item Seven
                </TabPanel>
                    <TabPanel value={value} index={13}>
                        Item Seven
                </TabPanel>
                    <TabPanel value={value} index={14}>
                        Item Seven
                </TabPanel>
                    <TabPanel value={value} index={15}>
                        Item Seven
                </TabPanel>
                    <TabPanel value={value} index={16}>
                        Item Seven
                </TabPanel>
                </div>
            </Paper>
        </Fragment>
    )
}

export const CustomerEdit = CustomerEditComponent;