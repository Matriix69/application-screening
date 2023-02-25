interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    className?: string;
}

function TabPanels(props: TabPanelProps) {
    const { children, className, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            className={className}
            {...other}
        >
            {value === index && children}
        </div>
    );
}

export default TabPanels;
