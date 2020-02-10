import React from "react";
import { AppCtx } from "./context";

const Page2 = (props) => {
    const pageCtx = React.useContext(AppCtx);
    const pageContext = () => {
        pageCtx.updatectxVar("Page2 Context !!!");
    }

    const error = () => {
        props.history.push({
            pathname: "/error"
        })
    }

    const next = () => {
        props.history.push({
            pathname: "/page3"
        })
    }

    React.useEffect(() => {
        console.log("Page 2: Mounting", props.history.action);
        if (props.history.action === "POP") {
            console.log("----- Stopped further actions in Page2");
            error();
            return;
        }
        let a = 1;
        console.log("Page2: a", a);
        return () => {
            console.log("Page2: UnMounting");
            let b = 2;
            console.log("Page2: b", b);
        }
    }, []);

    return (<React.Fragment>
        Page 2 --- {pageCtx.ctxVar}
        <button onClick={pageContext}>setPageCtx</button>
        <button onClick={error}>Error</button>
        <button onClick={next}>Next</button>
    </React.Fragment>)
}

export default Page2;