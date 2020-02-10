import React from "react";

const AppCtx = React.createContext({});

const CtxProvider = (props) => {

    const [ctxVar, setctxVar] = React.useState("Context Initiated !!!");

    const updatectxVar = (value) => {
        console.log("Context: updatectxVar:", value);
        setctxVar(value);
    }

    let dd = {
        ctxVar: ctxVar,
        updatectxVar: updatectxVar
    }

    return (<React.Fragment>
        CtxProvider
        <AppCtx.Provider value={dd}>
            {props.children}
        </AppCtx.Provider>
    </React.Fragment>)
}

export { AppCtx, CtxProvider };