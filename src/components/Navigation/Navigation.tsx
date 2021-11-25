import React, { useEffect, useState } from 'react';

const Navigation = ({ data, onSelect }: TNavigation) => {

    const [navigationObject, setNavigationObject] = useState({});

    useEffect(() => {
        setNavigationObject(data.reduce((navObj,{BCAP1, BCAP2, BCAP3, spend}): any => {

            // @ts-ignore
            if (!navObj[BCAP1]) navObj[BCAP1] = {};
            // @ts-ignore
            if (!navObj[BCAP1][BCAP2]) navObj[BCAP1][BCAP2] = {};
            // @ts-ignore
            if (!navObj[BCAP1][BCAP2][BCAP3]) navObj[BCAP1][BCAP2][BCAP3] = spend;

            // // @ts-ignore
            // if (!BCAP1keys.includes(BCAP1)) BCAP1keys.push(BCAP1);
            // // @ts-ignore
            // if (!BCAP2keys.includes(BCAP2)) BCAP2keys.push(BCAP2);
            // // @ts-ignore
            // if (!BCAP3keys.includes(BCAP3)) BCAP3keys.push(BCAP3);
            // return [BCAP1keys, BCAP2keys, BCAP3keys];
            return navObj;
        }, {}));
    }, []);

    return <ol>
        {Object.keys(navigationObject).sort().map((key, index) => {
            return <li key={key}>{key}
                <ol>
                    {/*
                         // @ts-ignore */}
                    {Object.keys(navigationObject[key]).map((subKey, subIndex) => {
                        return <li key={subKey}>{subKey}
                            {/*
                                // @ts-ignore */}
                            <ol>{Object.keys(navigationObject[key][subKey]).sort().map(tertiaryKey => <li onClick={() => onSelect(tertiaryKey)} key={tertiaryKey}>{tertiaryKey}</li>)}</ol>
                        </li>
                    })}
                </ol>
            </li>;
        })}
    </ol>;

    // return null;
    // //
    // const NavList = ({ children, parent = '', keys }: { children: any, parent: string, keys: string[]}) => {
    //     console.log(keys);
    //     return <ol>
    //         {keys.sort().map((key, index) => <li key={key}>{key}{index === (keys.length - 1) && children}</li>)}
    //     </ol>
    // }
    //
    // console.log(data);
    //
    // return <nav>
    //     {BCAP1.map((key, index) => {
    //         return <ol>
    //             <li>{key}{index === BCAP1.length - 1 &&</li>
    //         </ol>
    //     })}
    //     {/*<NavList keys={BCAP1} parent={''}>*/}
    //     {/*    <NavList keys={BCAP2}>*/}
    //     {/*        <NavList keys={BCAP3}>*/}
    //     {/*            {null} /!* TODO: hack to fix later *!/*/}
    //     {/*        </NavList>*/}
    //     {/*    </NavList>*/}
    //     {/*</NavList>*/}
    // </nav>
};

export default Navigation;
