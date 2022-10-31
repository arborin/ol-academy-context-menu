import React, { useState } from "react";
import ContextMenu from "./ContextMenu";
import "./List.css";

function List(props) {
    // console.log(props);
    const [showMenu, setShowMenu] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0, text: "" });
    const menu = props.data;

    const context = (e, text) => {
        e.preventDefault();
        setShowMenu(true);
        setPosition({ x: e.clientX, y: e.clientY, text: text });
        // console.log(position.x);
        // console.log(position.y);
        // console.log("TEXT: " + text);
    };

    const editMenu = () => {
        setShowMenu(false);
        console.log("Edit");
    };

    const deleteMenu = () => {
        setShowMenu(false);
        console.log("Delete");
    };

    const hideContext = () => {
        setShowMenu(false);
    };

    return (
        <>
            <div className="list-content" onClick={hideContext} style={{}}>
                <h2 className="title">Context Menu Example</h2>
                <ul>
                    {menu.map((item) => {
                        return (
                            <li
                                key={item.id}
                                onContextMenu={(event) =>
                                    context(event, item.name)
                                }
                            >
                                {item.name}
                            </li>
                        );
                    })}
                </ul>
                {showMenu && (
                    <ContextMenu
                        data={{
                            del: deleteMenu,
                            edit: editMenu,
                            x: position.x,
                            y: position.y,
                            text: position.text,
                        }}
                    />
                )}
            </div>
        </>
    );
}

export default List;
