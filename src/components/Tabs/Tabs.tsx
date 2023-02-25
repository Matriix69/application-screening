import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
    borderBottom: "1px solid #B5B5B5",
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        height: "3px",
    },
    "& .MuiTabs-indicatorSpan": {
        height: "3px",
        width: "100%",
        backgroundColor: "#000",
    },
});

interface StyledTabProps {
    label: string;
}

const StyledTab = styled((props: StyledTabProps) => <Tab {...props} />)(({ theme }) => ({
    textTransform: "none",
    fontWeight: 600,
    fontSize: "12px",
    color: "#000",
    background: "transparent",
    "&.Mui-selected": {
        color: "#000",
    },
    "&.Mui-focusVisible": {
        backgroundColor: "transparent",
    },
}));

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && children}
        </div>
    );
}

export default function AppTabs({ setValue, value, tabs }: { setValue: (val: number) => void; value: number; tabs: string[] }) {
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box>
                <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
                    {tabs.map((item, idx) => (
                        <StyledTab label={item} key={idx} />
                    ))}
                </StyledTabs>
            </Box>
        </Box>
    );
}
