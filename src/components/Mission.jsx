import React from 'react'
import AppButton from './AppButton'
import Container from './Container'

const styles = {
    mission: {
        paddingTop: '40px',
        paddingBottom: '40px',
    },
    title: {
        textAlign: 'center'
    },
    company: {
        color: '#0078d7',
        fontSize: '32px',
        fontWeight: '900'
    },
    text: {
        width: '80%',
        margin: '0 auto',
        marginTop: '20px',
        marginBottom: '40px',
        fontSize: '18px',
        fontWeight: '500'
    },
    button: {
        textAlign: 'center'
    }
}

export default function Mission() {
    return (
        <section style={styles.mission}>
            <Container>
            <h2 style={styles.title}>The <span style={styles.company}>AIGC</span> Mission and Goal</h2>
            <p style={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eius veritatis doloremque illo ipsa adipisci unde architecto
                eos non? Voluptates vero explicabo dolore natus ea, 
                ex voluptatum nam earum expedita itaque?
            </p>
            <div style={styles.button}>
            <AppButton title='Learn more' type='primary' size='lg' />
            </div>
            </Container>
        </section>
    )
}
