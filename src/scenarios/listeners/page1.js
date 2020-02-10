import React from "react";
import { AppCtx } from "./context";

const Page1 = (props) => {
    const pageCtx = React.useContext(AppCtx);

    const pageContext = () => {
        console.log(pageCtx);
        //pageCtx.updatectxVar("Page1 Context !!!");
    }

    const error = () => {
        props.history.push({
            pathname: "/error"
        })
    }

    const next = () => {
        props.history.push({
            pathname: "/page2"
        })
    }

    const appleCast = () => {
        console.log("APPLE CASTING ---- PAGE1");
    }

    const advert = () => {
        console.log("ADVERTING------ PAGE1");
        appleCast();
    }

    React.useEffect(() => {
        console.log("Page1: Mounting", props.history.action);

        if (props.history.action === "POP") {
            // check session store
            let page_refreshed = sessionStorage.getItem("PAGE_REFRESH");
            console.log("Page1: Checking page refresh", page_refreshed);
            if (page_refreshed === true || page_refreshed === "true") {
                console.log("Page1: Hit Error");
                error();
                return;
            }

            sessionStorage.setItem("PAGE_REFRESH", true);

            let a = 1;
            console.log("Page1: a", a);
            advert();


        }


        return () => {
            console.log("Page1: UnMounting");
            let b = 2;
            console.log("Page1: b", b);
        }
    }, []);

    return (<React.Fragment>
        Page 1 --- {pageCtx.ctxVar}
        <button onClick={pageContext}>setPageCtx</button>
        <button onClick={error}>Error</button>
        <button onClick={next}>Next</button>
    </React.Fragment>)
}

export default Page1;