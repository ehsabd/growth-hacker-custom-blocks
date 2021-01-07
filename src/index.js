import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload, URLInputButton } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

registerBlockType('growth-hacker-custom-blocks/xfeature-block', {
    title: 'xFeature Block',
    icon: 'smiley',
    category: 'design',
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'p',
        },
        title: {
            type: 'array',
            source: 'children',
            selector: 'h2',
        },
        mediaID: {
            type: 'number',
        },
        mediaURL: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'src',
        },
        ctaURL: {
            type: 'string'
        },
        ctaLabel: {
            type: 'string'
        },
        ctaMuteLabel: {
            type: 'string'
        },
    },
    example: {
        attributes: {
            content: __('Hello world'),
        },
    },
    edit: (props) => {
        const {
            attributes: { title, mediaID, mediaURL, content, ctaURL, ctaLabel, ctaMuteLabel },
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


        return (
            <div className={className}>
                <RichText
                    tagName="h3"
                    placeholder={__(
                        'Write Featured Item Title…',
                        'growth-hacker-custom-blocks'
                    )}
                    value={title}
                    onChange={onChangeTitle}
                />
                <div className="article-block__content">
                    <div className="article-block__image">
                        <MediaUpload
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
            </div>


        );
    },
    save: (props) => {
        const {
            className,
            attributes: { title, mediaID, mediaURL, content, ctaURL, ctaLabel, ctaMuteLabel },
        } = props;

        return (
            <div className="{className">
                <RichText.Content tagName="h3" value={title} />

                <div className="article-block__content">
                    <a className="article-block__image" href="https://www.amazon.com/dp/B07F9NGRKF/">

                        {mediaURL && (
                            <img
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
                                <RichText.Content tagName="p" value={props.attributes.content} />
                            </div>
                            <div className="article-block__footer"><a className="article-block__button" href={ctaURL} target="_blank" rel="nofollow noopener noreferrer">{ctaLabel}</a>

                                <span className="article-block__mute_label">{ctaMuteLabel}</span></div>
                        </div>

                    </div>

                </div>
            </div>
        );
    },
});