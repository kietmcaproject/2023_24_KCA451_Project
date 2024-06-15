import style from '../../css/divider.module.css'
export const Divider = ({ children }) => {
    return (
        <div className={style.line_contain}>
            <div className={style.line}></div>
            <div className={style.text_contain}>{children}</div>
            <div className={style.line}></div>
        </div>
    );
  };
  