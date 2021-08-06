import React from 'react'

const styles = {
    logoText: {
        fontSize: '32px',
        fontWeight: '900',
        letterSpacing: '2px',
    }
}

export default function Logo() {
    return (
        <div className='logo'>
            <h1 style={styles.logoText}>AIGC</h1>
        </div>
    )
}
