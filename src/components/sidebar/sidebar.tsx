export const Sidebar = () => {
  return (
    <div className='catalog__order order'>
      <section className='order__wrapper'>
        <div className='order__wrap-title' tabIndex='0' role='button'>
          <h2 className='order__title'>Корзина</h2>

          <span className='order__count'>0</span>
        </div>

        <div className='order__wrap_list'>
          <ul className='order__list'></ul>

          <div className='order__total'>
            <p>Итого</p>

            <p>
              <span className='order__total-amount'>0</span>
              <span className='currency'>₴</span>
            </p>
          </div>

          <button className='order__submit'>Оформить заказ</button>

          <div className='order__wrap-appeal'>
            <p className='order__appeal'>Бесплатная доставка</p>

            <button className='order__close'>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  )
}
