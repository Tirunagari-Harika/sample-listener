import React from "react";
import { AppCtx } from "./context";

const Page3 = (props) => {
    const pageCtx = React.useContext(AppCtx);
    const pageContext = () => {
        pageCtx.updatectxVar("Page3 Context !!!");
    }
    const error = () => {
        props.history.push({
            pathname: "/error"
        })
    }

    const success = () => {
        window.location.assign("https://www.google.com?success=success");
    }

    React.useEffect(() => {
        console.log("Page 3: Mounting", props.history.action);
        if (props.history.action === "POP") {
            let page_refreshed = sessionStorage.getItem("PAGE_REFRESH");
            console.log("Page3: Checking page refresh", page_refreshed);
            if (page_refreshed === true || page_refreshed === "true") {
                console.log("Page3: Hit Error");
                error();
                return;
            }

            sessionStorage.setItem("PAGE_REFRESH", true);
            console.log("Page3: Continuing Exceed Limit transactions");
            return;
        } else if (props.history.action === "PUSH") {
            let a = 1;
            console.log("Page3: push a", a);
        }

        return () => {
            console.log("Page3: UnMounting");
            let b = 2;
            console.log("Page3: b", b);
        }
    }, []);


    /*  const next = () => {
         props.history.push({
             pathname: "/page2"
         })
     } */
    return (<React.Fragment>
        Page 3 --- {pageCtx.ctxVar}
        <button onClick={pageContext}>setPageCtx</button>
        <button onClick={error}>Error</button>
        <button onClick={success}>Success</button>
    </React.Fragment>)
}

export default Page3;