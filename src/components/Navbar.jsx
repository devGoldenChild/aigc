import React from 'react'

const styles = {
    navbar: {
        display: 'flex',
    },
    navbarList: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    navbarListItem: {
        display: 'inline-block',
        marginLeft: '20px',
    },
    navbarLink: {
        textDecoration: 'none',
        fontSize: '18px',
        color: '#fff',
    }
}

export default function Navbar({links}) {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.navbarList}>
                {links.map(link => <li style={styles.navbarListItem} key={link.title}><a style={styles.navbarLink} href="">{link.title}</a></li>)}
            </ul>
        </nav>
    )
}
