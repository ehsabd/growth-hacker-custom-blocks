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

        <a href={url} role="button" className="shareicons-icon-wrapper shareicons-share-btn shareicons-svc-pinterest_share" style="border-radius: 26px;"><span className="at4-visually-hidden">Share to Pinterest</span><span className="shareicons-icon-wrapper" style="line-height: 20px; height: 20px; width: 20px;"><title id="shareicons-svg-pinterest_share-9">Pinterest</title></span></a>
    )
}

const FacebookShareButton = (props) => {
    const url = 'https://www.facebook.com/sharer/sharer.php?u=' + props.url;
    return (
        <a href={url} role="button" className="shareicons-icon-wrapper shareicons-share-btn shareicons-svc-facebook" style="border-radius: 26px;"><span className="at4-visually-hidden">Share to Facebook</span><span className="shareicons-icon-wrapper" style="line-height: 20px; height: 20px; width: 20px;"><title id="shareicons-svg-facebook-7">Facebook</title></span></a>
    )
}

const TwitterShareButton = (props) => {
    const url = `https://twitter.com/share?url=${props.url}&text=${encodeURIComponent(props.text)}`;
    return (
        <a href={url} role="button" className="shareicons-icon-wrapper shareicons-share-btn shareicons-svc-twitter" style="border-radius: 26px;"><span className="at4-visually-hidden">Share to Twitter</span><span className="shareicons-icon-wrapper" style="line-height: 20px; height: 20px; width: 20px;"><title id="shareicons-svg-twitter-8">Twitter</title></span></a>
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

                                <FacebookShareButton url={ctaURL}></FacebookShareButton>
                                <TwitterShareButton url={ctaURL} text={content}></TwitterShareButton>
                                <PinterestShareButton url={ctaURL} media={mediaURL} description={content}></PinterestShareButton>


                            </div></div></div></div></div></div>
                    </div>

                </div>
            </div>
        );
    },
});