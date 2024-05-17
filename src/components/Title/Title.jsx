import style from './Title.module.css'

function Title({children}){
    return(
        <div className={style.title}>
            <h2>{children}</h2>
        </div>
    )
}
export default Title