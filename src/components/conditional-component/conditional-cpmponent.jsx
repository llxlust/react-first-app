import MySecondComponent from "../my-second-compenent/my-second-compenent";

function ConditionalRender ({ isShow }){
    // if (isShow){
    //     return <p>This is</p>
    // }

    return (
        <div>
            <p>This is</p>
            {isShow && <MySecondComponent/>}
        </div>
    )
}

export default ConditionalRender;