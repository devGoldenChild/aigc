import React from 'react'

const styles = {
    content: {
        borderWidth: "1px",
        borderColor: "#ccc",
        backgroundColor: "#f2f2f2",
        paddingLeft: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRadius: "10px",
        width: "300px"
    },
    input: {
        width: "90%",
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        fontSize: '18px'
    }
}

export default function Search() {
    return (
        <div style={styles.content}>
            <input style={styles.input} type="text" placeholder="Search" />
        </div>
    )
}
