
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload, URLInputButton } from '@wordpress/block-editor';
import { Button, CheckboxControl } from '@wordpress/components';
const PinterestShareButtonDeprecated = (props) => {
    const url = "http://pinterest.com/pin/create/button/" +
        "?url=" + props.url +
        "&media=" + props.media +
        "&description=" + props.description;

    return (

        <a href={url} role="button" className="shareicons-icon-wrapper shareicons-share-btn shareicons-svc-pinterest_share" style="border-radius: 26px;"><span className="at4-visually-hidden">Share to Pinterest</span><span className="shareicons-icon-wrapper" style="line-height: 20px; height: 20px; width: 20px;"><title id="shareicons-svg-pinterest_share-9">Pinterest</title></span></a>
    )
}

const FacebookShareButtonDeprecated = (props) => {
    const url = 'https://www.facebook.com/sharer/sharer.php?u=' + props.url;
    return (
        <a href={url} role="button" className="shareicons-icon-wrapper shareicons-share-btn shareicons-svc-facebook" style="border-radius: 26px;"><span className="at4-visually-hidden">Share to Facebook</span><span className="shareicons-icon-wrapper" style="line-height: 20px; height: 20px; width: 20px;"><title id="shareicons-svg-facebook-7">Facebook</title></span></a>
    )
}

const TwitterShareButtonDeprecated = (props) => {
    const url = `https://twitter.com/share?url=${props.url}&text=${encodeURIComponent(props.text)}`;
    return (
        <a href={url} role="button" className="shareicons-icon-wrapper shareicons-share-btn shareicons-svc-twitter" style="border-radius: 26px;"><span className="at4-visually-hidden">Share to Twitter</span><span className="shareicons-icon-wrapper" style="line-height: 20px; height: 20px; width: 20px;"><title id="shareicons-svg-twitter-8">Twitter</title></span></a>
    )
}

export const  v0_1_5 = {
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: '.article-block__text p',
        },
        title: {
            type: 'array',
            source: 'children',
            selector: 'h3',
        },
        mediaID: {
            type: 'string',
            source: 'attribute',
            selector: 'img.article-block__image-i',
            attribute: 'media-id',
        },
        mediaURL: {
            type: 'string',
            source: 'attribute',
            selector: 'img.article-block__image-i',
            attribute: 'src',
        },
        ctaURL: {
            type: 'string',
            source: 'attribute',
            attribute: 'href',
            selector: '.article-block__button'
        },
        ctaLabel: {
            type: 'array',
            source: 'children',
            selector: '.article-block__button'
        },
        ctaMuteLabel: {
            type: 'array',
            source: 'children',
            selector: '.article-block__mute_label'
        },
        borderClassName: {
            type: 'string'
        }
    },
    save: (props) => {
const {
    className,
    attributes: { title, mediaID, mediaURL, content, ctaURL, ctaLabel, ctaMuteLabel, borderClassName },
} = props;

return (
    <div className={`xfeature-block ${className} ${borderClassName}`}>
        <RichText.Content tagName="h3" value={title} />

        <div className="article-block__content">
            <a className="article-block__image" href="https://www.amazon.com/dp/B07F9NGRKF/">

                {mediaURL && (
                    <img
                        media-id={mediaID}
                        className="article-block__image-i"
                        src={mediaURL}
                        alt={ctaLabel}
                        width="270"
                        height="270"
                    />
                )}


            </a>
            <div className="article-block__box">
                <div className="article-block__wrap">
                    <div className="article-block__text">
                        <RichText.Content tagName="p" value={content} />
                    </div>
                    <div className="article-block__footer"><RichText.Content className="article-block__button" href={ctaURL} target="_blank" rel="nofollow noopener noreferrer" tagName="a" value={ctaLabel} />

                        <RichText.Content tagName="span" className="article-block__mute_label" value={ctaMuteLabel} /></div>
                </div>
                <div className="article-block__controls"
                ><div className="controls-box share-open"><div className="controls-box__button controls-box__button-favorite icon-bookmark"></div><div className="controls-box__share"><div className="controls-box__button controls-box__button-share icon-share"></div><div className="controls-box__share-drop">


                    <div className="shareicons-resp-share-element shareicons-style-responsive at4-show shareicons-mobile" role="region"><div className="shareicons-share-btn-elements">

                        <FacebookShareButtonDeprecated url={ctaURL}></FacebookShareButtonDeprecated>
                        <TwitterShareButtonDeprecated url={ctaURL} text={content}></TwitterShareButtonDeprecated>
                        <PinterestShareButtonDeprecated url={ctaURL} media={mediaURL} description={content}></PinterestShareButtonDeprecated>


                    </div></div></div></div></div></div>
            </div>

        </div>
    </div>
);
},
};