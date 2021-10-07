import '../stylesheets/RightSide/MagicSlate.css'


export const MagicSlate = (props, className) => {
    return (
        <>
            <div className="block__slate">
                {props.children}
            </div>
        </>
    )
};
