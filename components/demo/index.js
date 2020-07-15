import style from './index.module.scss'
export default function Demo() {
  return (
    <div>
      <h1 className={style.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <div className={style['box-16-9']}>
        <div className={style.wrap}>16 x 9</div>
      </div>
    </div>
  )
}
