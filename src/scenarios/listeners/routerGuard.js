import React from "react";
import { withRouter } from "react-router-dom";

const RouterGaurd = (props) => {
    const [isLoad, setisLoad] = React.useState(true);

    const error = () => {
        props.history.push({
            pathname: "/error"
        })
    }

    const checkPageRefresh = () => {
        let path = window.location.pathname;
        if (path.indexOf("error") !== -1) {
            let page_refreshed = sessionStorage.getItem("PAGE_REFRESH");
            if (page_refreshed === true || page_refreshed === "true") {
                console.log("Page: checking Page Refresh");
                error();
                return;
            }
        }

    }

    const historyListener = () => {
        props.history.listen((loc, action) => {
            console.log("LOCATION ---- and ACTION ", loc, action);
            if (action === "POP") {
                setisLoad(false);
                props.history.push({
                    pathname: "/error"
                })
            } else if (action === "PUSH") {
                if (loc.pathname.indexOf("error") !== -1) {
                    setisLoad(true);
                }
            }
        });
    }

    React.useEffect(() => {
        // how come it got loaded with a console stmt
        //console.log("In RouterGuard");
        checkPageRefresh();
        historyListener();
    }, []);

    return (<React.Fragment>
        RouterGuard
        {isLoad ? props.children : null}

    </React.Fragment>)
}

export default withRouter(RouterGaurd);