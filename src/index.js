import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload, URLInputButton } from '@wordpress/block-editor';
import { Button, CheckboxControl } from '@wordpress/components';


const PinterestShareButton = (props) => {
    const url = "http://pinterest.com/pin/create/button/" +
        "?url=" + props.url +
        "&media=" + props.media +
        "&description=" + props.description;

    return (

        <a href={url} role="button" tabindex="0" className="shareicons-icon-wrapper shareicons-share-btn shareicons-svc-pinterest_share" style="background-color: rgb(203, 32, 39); border-radius: 26px;"><span className="at4-visually-hidden">Share to Pinterest</span><span className="shareicons-icon-wrapper" style="line-height: 20px; height: 20px; width: 20px;"><svg viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="shareicons-svg-pinterest_share-9" className="shareicons-icon shareicons-icon-pinterest_share" style="fill: rgb(255, 255, 255); width: 20px; height: 20px;"><title id="shareicons-svg-pinterest_share-9">Pinterest</title><g><path d="M7 13.252c0 1.81.772 4.45 2.895 5.045.074.014.178.04.252.04.49 0 .772-1.27.772-1.63 0-.428-1.174-1.34-1.174-3.123 0-3.705 3.028-6.33 6.947-6.33 3.37 0 5.863 1.782 5.863 5.058 0 2.446-1.054 7.035-4.468 7.035-1.232 0-2.286-.83-2.286-2.018 0-1.742 1.307-3.43 1.307-5.225 0-1.092-.67-1.977-1.916-1.977-1.692 0-2.732 1.77-2.732 3.165 0 .774.104 1.63.476 2.336-.683 2.736-2.08 6.814-2.08 9.633 0 .87.135 1.728.224 2.6l.134.137.207-.07c2.494-3.178 2.405-3.8 3.533-7.96.61 1.077 2.182 1.658 3.43 1.658 5.254 0 7.614-4.77 7.614-9.067C26 7.987 21.755 5 17.094 5 12.017 5 7 8.15 7 13.252z" fill-rule="evenodd"></path></g></svg></span></a>
    )
}

const FacebookShareButton = (props) => {
    const url = 'https://www.facebook.com/sharer/sharer.php?u=' + props.url;
    return (
        <a href={url} role="button" tabindex="0" className="shareicons-icon-wrapper shareicons-share-btn shareicons-svc-facebook" style="background-color: rgb(59, 89, 152); border-radius: 26px;"><span className="at4-visually-hidden">Share to Facebook</span><span className="shareicons-icon-wrapper" style="line-height: 20px; height: 20px; width: 20px;"><svg viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="shareicons-svg-facebook-7" className="shareicons-icon shareicons-icon-facebook" style="fill: rgb(255, 255, 255); width: 20px; height: 20px;"><title id="shareicons-svg-facebook-7">Facebook</title><g><path d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z" fill-rule="evenodd"></path></g></svg></span></a>
    )
}

const TwitterShareButton = (props) => {
    const url = 'https://twitter.com/share?url=' + props.url;
    return (
        <a href={url} role="button" tabindex="0" className="shareicons-icon-wrapper shareicons-share-btn shareicons-svc-twitter" style="background-color: rgb(29, 161, 242); border-radius: 26px;"><span className="at4-visually-hidden">Share to Twitter</span><span className="shareicons-icon-wrapper" style="line-height: 20px; height: 20px; width: 20px;"><svg viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="shareicons-svg-twitter-8" className="shareicons-icon shareicons-icon-twitter" style="fill: rgb(255, 255, 255); width: 20px; height: 20px;"><title id="shareicons-svg-twitter-8">Twitter</title><g><path d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336" fill-rule="evenodd"></path></g></svg></span></a>
    )
}

registerBlockType('growth-hacker-custom-blocks/xfeature-block', {
    title: 'xFeature Block',
    icon: 'smiley',
    category: 'design',
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
            type: 'string',
            source: 'text',
            selector: '.article-block__button'
        },
        ctaMuteLabel: {
            type: 'string'
        },
        borderClassName: {
            type: 'string'
        }
    },
    example: {
        attributes: {
            content: __('Hello world'),
        },
    },
    edit: (props) => {
        const {
            attributes: { title, mediaID, mediaURL, content, ctaURL, ctaLabel, ctaMuteLabel, borderClassName },
            setAttributes,
            className,
        } = props;

        const onChangeContent = (newContent) => {
            setAttributes({ content: newContent });
        };

        const onSelectImage = (media) => {
            setAttributes({
                mediaURL: media.url,
                mediaID: media.id,
            });
        };

        const onRemoveImage = () => {
            setAttributes({
                mediaID: undefined,
                mediaURL: undefined,
            });
        }

        const onChangeTitle = (value) => {
            setAttributes({ title: value });
        };

        const onChangeCtaURL = (value) => {
            setAttributes({ ctaURL: value });
        };

        const onChangeCtaLabel = (value) => {
            setAttributes({ ctaLabel: value });
        };

        const onChangeCtaMuteLabel = (value) => {
            setAttributes({ ctaMuteLabel: value });
        };

        const onChangeBorders = (direction, value) => {
            console.log(direction);
            console.log(value);
            if (hasBorder(direction)) {
                if (!value) {
                    removeBorder(direction);
                }
            } else {

                if (value) {
                    addBorder(direction);
                }

            }
        };

        const hasBorder = (direction) => {
            return borderClassName && ~borderClassName.indexOf(`border-${direction}`);
        }

        const addBorder = (direction) => {
            setAttributes({ borderClassName: (borderClassName || '').trim() + ` border-${direction}` });
        }

        const removeBorder = (direction) => {
            setAttributes({ borderClassName: (borderClassName || '').replace(`border-${direction}`, '') });
        }



        return (
            <div className={`xfeature-block ${className} ${borderClassName}`}>
                <div className="title-wrap">
                    <RichText
                        tagName="h3"
                        placeholder={__(
                            'Write Featured Item Title…',
                            'growth-hacker-custom-blocks'
                        )}
                        value={title}
                        onChange={onChangeTitle}
                    />
                </div>

                <div className="article-block__content">
                    <div className="article-block__image">
                        {mediaID && <button type="button" onClick={onRemoveImage} className="components-button is-destructive">Remove Image</button>
                        }    <MediaUpload
                            onSelect={onSelectImage}
                            allowedTypes="image"
                            value={mediaID}
                            render={({ open }) => (
                                <Button
                                    className={
                                        mediaID
                                            ? 'image-button'
                                            : 'button button-large'
                                    }
                                    onClick={open}
                                >
                                    { !mediaID ? (
                                        __('Upload Image', 'growth-hacker-custom-blocks')
                                    ) : (
                                            <img
                                                media-id={mediaID}
                                                src={mediaURL}
                                                alt={__(
                                                    'Upload Featured Image',
                                                    'growth-hacker-custom-blocks'
                                                )}
                                            />
                                        )}
                                </Button>
                            )}
                        /></div>

                    <div className="article-block__box">
                        <div className="article-block__wrap">
                            <div className="article-block__text">
                                <RichText
                                    tagName="p"
                                    placeholder={__(
                                        'Write Featured Item Text Here…',
                                        'growth-hacker-custom-blocks'
                                    )}
                                    className={className}
                                    onChange={onChangeContent}
                                    value={content}
                                />
                            </div>
                            <div className="article-block__footer">
                                <RichText
                                    className="article-block__button"
                                    value={ctaLabel}
                                    placeholder={__(
                                        'Write Your CTA Label Here…',
                                        'growth-hacker-custom-blocks'
                                    )}
                                    onChange={onChangeCtaLabel}
                                />
                                <URLInputButton className=""
                                    url={ctaURL}
                                    onChange={onChangeCtaURL}
                                />
                                <RichText
                                    className="article-block__mute_label"
                                    value={ctaMuteLabel}
                                    placeholder={__(
                                        'Pute Muted CTA Label Here…',
                                        'growth-hacker-custom-blocks'
                                    )}
                                    onChange={onChangeCtaMuteLabel}
                                />

                            </div>
                        </div>

                    </div>
                </div>

                <div className="block-borders-settings">
                    Borders:
                    <CheckboxControl
                        label="Top"
                        checked={hasBorder('t')}
                        onChange={value => { onChangeBorders('t', value) }}
                    />
                    <CheckboxControl
                        label="Bottom"
                        checked={hasBorder('b')}
                        onChange={value => { onChangeBorders('b', value) }}
                    />
                    <CheckboxControl
                        label="Left"
                        checked={hasBorder('l')}
                        onChange={value => { onChangeBorders('l', value) }}
                    />
                    <CheckboxControl
                        label="Right"
                        checked={hasBorder('r')}
                        onChange={value => { onChangeBorders('r', value) }}
                    />
                </div>
            </div>


        );
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
                            <div className="article-block__footer"><a className="article-block__button" href={ctaURL} target="_blank" rel="nofollow noopener noreferrer">{ctaLabel}</a>

                                <span className="article-block__mute_label">{ctaMuteLabel}</span></div>
                        </div>
                        <div className="article-block__controls"
                        ><div className="controls-box share-open"><div className="controls-box__button controls-box__button-favorite icon-bookmark"></div><div className="controls-box__share"><div className="controls-box__button controls-box__button-share icon-share"></div><div className="controls-box__share-drop">


                            <div className="shareicons-resp-share-element shareicons-style-responsive at4-show shareicons-mobile" role="region"><div className="shareicons-share-btn-elements">

                                <FacebookShareButton url={window.location.href}></FacebookShareButton>
                                <TwitterShareButton url={window.location.href}></TwitterShareButton>
                                <PinterestShareButton url={window.location.href} media={mediaURL} description={content}></PinterestShareButton>


                            </div></div></div></div></div></div>
                    </div>

                </div>
            </div>
        );
    },
});