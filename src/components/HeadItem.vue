<template>
  <div class="head-item">
    <img src="@/assets/images/logo.png" alt="head-item" class="logo" />
    <h1>ДИВЕЕВСКАЯ ИГРУШКА</h1>
    <p>
      Уникальное самобытное явление культуры, зарождающийся народный промысел.
      <br />
      Эта игрушка является настоящим символом русского народного творчества и имеет <br />
      богатую историю, насчитывающую сотни лет.
    </p>
    <img src="@/assets/images/head-img.png" alt="head-item" class="head-img" />
  </div>
</template>

<style lang="scss" scoped>
.head-item {
  margin-top: 31.17rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    width: 197.16rem;
  }

  h1 {
    font-family: 'Condensed';
    font-size: 110rem;
    line-height: 132rem;
    color: $primary-color;
  }

  p {
    width: 848rem;
    font-family: 'Inter';
    font-size: 20rem;
    line-height: 24.2rem;
    text-align: center;
    margin-top: 31rem;
    color: $text-color;
  }

  .head-img {
    width: 100%;
    height: 588rem;
    margin-top: 63.28rem;
  }
}
</style>
