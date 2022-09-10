import { ParagraphProps } from "./Paragraph.props";
import styles from './Paragraph.module.css'
import cn from 'classnames'

export const Paragraph = ({size = 's14', children, className, ...props}: ParagraphProps): JSX.Element => {
    return (
        <p
            className={cn(styles.paragraph, className, {
                [styles.s14]: size == 's14',
                [styles.s16]: size == 's16',
                [styles.s18]: size == 's18',
            })}
            {...props}
        >
            {children}
        </p>
    )
};