import React from 'react'

const styles = {
    feature: {
        minWidth: '350px',
        width: '33%',
        padding: "20px"
    },
    icon: {
        fontSize: '30px',
    },
    title: {
        textTransform: 'uppercase',
        color: '#ffd868',
    }
}

export default function Feature({title, Icon, children}) {
    return (
        <div style={styles.feature}>
            <div style={styles.icon}>
                <Icon />
            </div>
            <h3 style={styles.title}>{title}</h3>
            {children}
        </div>
    )
}
