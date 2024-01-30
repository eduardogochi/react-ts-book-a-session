import { type ComponentPropsWithoutRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    to?: never
}

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    to?: string
}

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
    return 'to' in props
}

export default function Button(props: ButtonProps | AnchorProps) {

    if (isAnchorProps(props)) {
        return <a className='link' {...props}></a>
    }

    return (
        <button className='button' {...props}></button>
    )
}