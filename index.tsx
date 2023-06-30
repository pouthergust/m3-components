import React from "react";
import { Link } from "vtex.render-runtime";

interface M3ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    href?: string;
    responsive?: Array<{ media: string, srcset: string }>
}

type M3PictureProps =  M3ImgProps

function M3Img({src, href, ...rest}: M3ImgProps) {
    return (
        <>
            {href &&  <Link to={href}><M3Picture src={src} {...rest} /></Link>}
            {!href &&  <M3Picture src={src} {...rest} />}
        </>
    );
}

function M3Picture({
    src,
    responsive,
    ...rest
}: M3PictureProps) {

    return (
        <picture>
            {responsive && responsive.map(({media, srcset}, index) => (
                <source key={index} media={`(${media})`} srcSet={srcset} />
            ))}
            <img src={src} {...rest} />
        </picture>
    );
}


export default M3Img;
