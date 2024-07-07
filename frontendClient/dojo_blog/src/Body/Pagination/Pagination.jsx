import styles from'./styles.module.css'

const Pagination = ({limit, page, setPage, total}) => {

  const totalPage = Math.ceil(total/limit)

  const clic =(newPage)=>{
    setPage(newPage + 1)
}

  return (
    <div className={styles.pagination}>
    {totalPage > 0 && [...Array(totalPage)].map((val,index)=>{
      return (
        <div  key={index}>
        <button
           className={
            page === index + 1 ? `${styles.page_btn} ${styles.active}` : styles.page_btn
           }
          
           onClick={()=>clic(index)}
        >
            {index + 1}
        </button>
        </div>
)})}
</div>
  )
}

export default Pagination