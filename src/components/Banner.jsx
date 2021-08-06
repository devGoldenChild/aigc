import React from 'react';
import AppButton from './AppButton';
import Container from './Container';
import Feature from './Feature';
import {FaToolbox } from 'react-icons/fa';
import {FaClipboardCheck } from 'react-icons/fa';
import {FaLaptopCode } from 'react-icons/fa';

const styles = {
    banner: {
        minHeight: "100vh",
    },
    topBanner: {
        paddingTop: '180px'
    },
    bannerTitle: {
        color: '#f2f2f2',
        fontSize: '60px',
        textTransform: 'uppercase',
        fontWeight: '900',
        letterSpacing: '2px'
    },
    span: {
        color: '#ffd868',
        fontSize: '120%',
    },
    desc: {
        color: '#f2f2f2',
        marginTop: '20px',
        width: '60%',
        fontSize: '20px',
        marginBottom: '30px'
    },
    bannerBottom: {
        backgroundColor: '#0078d7',
        color: '#f2f2f2',
        marginTop: '180px',

    },
    features: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}

export default function Banner() {
    return (
        <section style={styles.banner} className='page-banner'>
            <div style={styles.topBanner}>
                <Container>
                <h2 style={styles.bannerTitle}>Effective <span style={styles.span}>IT</span> Solutions</h2>
                <p style={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde laborum asperiores eveniet quisquam, maxime,
                    similique quae recusandae blanditiis natus laboriosam
                </p>
                <div>
                    <AppButton title='Explore more' type='primary' size='lg' />
                    <AppButton title='Contact us' type='secondary' size='lg' />
                </div>
                </Container>
            </div>
            <div style={styles.bannerBottom}>
                <Container>
                    <div style={styles.features}>
                    <Feature title='Data Administration' Icon={FaToolbox}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempore adipisci neque sed culpa magnam nam cupiditate autem minus.
                    </Feature>
                    <Feature title='IT Infrastructure' Icon={FaClipboardCheck}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempore adipisci neque sed culpa magnam nam cupiditate autem minus.
                    </Feature>
                    <Feature title='Development' Icon={FaLaptopCode}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempore adipisci neque sed culpa magnam nam cupiditate autem minus.
                    </Feature>
                    </div>
                </Container>
            </div>
        </section>
    )
}
