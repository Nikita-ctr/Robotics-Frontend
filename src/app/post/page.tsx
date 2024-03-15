import styles from './page.module.css';
import HeaderAndFooterLayout from "../HeaderAndFooterLayout/HeaderAndFooterLayout";

import Image from 'next/image';

import Chip from '@/components/Chip/Chip';

export default function Page() {
    return (
        <HeaderAndFooterLayout>
            <main>
                <div>

                </div>
                <section className={styles.section_container}>
                    <div className={styles.content_container}>
                        <header>
                            <div className={styles.header_container}>
                                <h1 className={styles.content_header__title}>Lorem ipsum dolor sit amet</h1>
                                <div className={styles.post_date_publication}>15.03.2024 18:17</div>
                            </div>
                        </header>
                        <article>
                            <div className={styles.article_container}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Turpis egestas  integer eget aliquet nibh praesent. Tellus cras adipiscing enim eu  turpis egestas pretium aenean pharetra. Semper quis lectus nulla at  volutpat diam ut venenatis tellus. Augue interdum velit euismod in  pellentesque massa. Suspendisse sed nisi lacus sed viverra tellus in hac  habitasse. Sollicitudin aliquam ultrices sagittis orci a. Sollicitudin  tempor id eu nisl nunc mi ipsum faucibus vitae. Risus commodo viverra  maecenas accumsan lacus vel. Id volutpat lacus laoreet non curabitur  gravida arcu ac tortor. Augue interdum velit euismod in pellentesque  massa placerat. Etiam sit amet nisl purus in. Pellentesque diam volutpat  commodo sed egestas egestas fringilla phasellus faucibus. Odio tempor  orci dapibus ultrices in iaculis. Nulla facilisi nullam vehicula ipsum a  arcu cursus vitae congue.</p>

                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Turpis egestas  integer eget aliquet nibh praesent. Tellus cras adipiscing enim eu  turpis egestas pretium aenean pharetra. Semper quis lectus nulla at  volutpat diam ut venenatis tellus. Augue interdum velit euismod in  pellentesque massa. Suspendisse sed nisi lacus sed viverra tellus in hac  habitasse. Sollicitudin aliquam ultrices sagittis orci a. Sollicitudin  tempor id eu nisl nunc mi ipsum faucibus vitae. Risus commodo viverra  maecenas accumsan lacus vel. Id volutpat lacus laoreet non curabitur  gravida arcu ac tortor. Augue interdum velit euismod in pellentesque  massa placerat. Etiam sit amet nisl purus in. Pellentesque diam volutpat  commodo sed egestas egestas fringilla phasellus faucibus. Odio tempor  orci dapibus ultrices in iaculis. Nulla facilisi nullam vehicula ipsum a  arcu cursus vitae congue.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Turpis egestas  integer eget aliquet nibh praesent. Tellus cras adipiscing enim eu  turpis egestas pretium aenean pharetra. Semper quis lectus nulla at  volutpat diam ut venenatis tellus. Augue interdum velit euismod in  pellentesque massa. Suspendisse sed nisi lacus sed viverra tellus in hac  habitasse. Sollicitudin aliquam ultrices sagittis orci a. Sollicitudin  tempor id eu nisl nunc mi ipsum faucibus vitae. Risus commodo viverra  maecenas accumsan lacus vel. Id volutpat lacus laoreet non curabitur  gravida arcu ac tortor. Augue interdum velit euismod in pellentesque  massa placerat. Etiam sit amet nisl purus in. Pellentesque diam volutpat  commodo sed egestas egestas fringilla phasellus faucibus. Odio tempor  orci dapibus ultrices in iaculis. Nulla facilisi nullam vehicula ipsum a  arcu cursus vitae congue.</p>

                                <figure className={styles.figure_container}>
                                    <div>
                                        <div className={styles.image_container}>
                                            <Image src={"/images/test_image.jpg"} alt="" fill />
                                        </div>
                                    </div>
                                    <figcaption className={styles.figcaption_container}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </figcaption>
                                </figure>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Turpis egestas  integer eget aliquet nibh praesent. Tellus cras adipiscing enim eu  turpis egestas pretium aenean pharetra. Semper quis lectus nulla at  volutpat diam ut venenatis tellus. Augue interdum velit euismod in  pellentesque massa. Suspendisse sed nisi lacus sed viverra tellus in hac  habitasse. Sollicitudin aliquam ultrices sagittis orci a. Sollicitudin  tempor id eu nisl nunc mi ipsum faucibus vitae. Risus commodo viverra  maecenas accumsan lacus vel. Id volutpat lacus laoreet non curabitur  gravida arcu ac tortor. Augue interdum velit euismod in pellentesque  massa placerat. Etiam sit amet nisl purus in. Pellentesque diam volutpat  commodo sed egestas egestas fringilla phasellus faucibus. Odio tempor  orci dapibus ultrices in iaculis. Nulla facilisi nullam vehicula ipsum a  arcu cursus vitae congue.</p>
                            </div>
                        </article>
                        <div className={styles.chips_container}>
                            <Chip text="Наука" />
                        </div>
                    </div>
                </section>
                <div>

                </div>
            </main>
        </HeaderAndFooterLayout>
    );
}