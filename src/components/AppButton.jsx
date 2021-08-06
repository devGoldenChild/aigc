import React from 'react'

export default function AppButton({title, type, size}) {

    return (
        <a href="" className={`btn btn-${type} btn-${size}`}>{title}</a>
    )
}
