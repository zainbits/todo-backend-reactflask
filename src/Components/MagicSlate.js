import '../stylesheets/RightSide/MagicSlate.css'


export const MagicSlate = ({children, className}) => {
    return (
        <>
            <div className={className}>
                {children}
            </div>
        </>
    )
};
