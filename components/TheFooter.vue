<script setup>
import IconLogo from "../assets/images/logo.svg";
import IconFacebook from "../assets/images/facebook.svg";
import IconVk from "../assets/images/vk.svg";
import IconInstagram from "../assets/images/instagram.svg";
import IconTelegram from "../assets/images/telegram.svg";
</script>

<template lang="pug">
footer.footer 
    div.footer__content.container
        .footer__left-wrapper
            img.footer__logo(:src="IconLogo")
            p Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности

        .footer__right-wrapper
            div.footer__mail
                p email
                a(href="mailto:testblogsupport@gmail.com") testblogsupport@gmail.com
            div.footer__social-icons 
              img.footer__social-icon(:src="IconFacebook")
              img.footer__social-icon(:src="IconVk")
              img.footer__social-icon(:src="IconInstagram")
              img.footer__social-icon(:src="IconTelegram")
    
    .subscribe.container
      p Подпишись на рассылку
      form
        input(type="email" placeholder="Email")
        button Подписаться
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";
.footer {
  border-top: 1px solid $grey-color;

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0 70px;
    background: $white-color;
  }

  &__left-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
      max-width: 426px;
      color: $grey-color;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
  }

  &__logo {
    width: 133px;
    height: 32px;
  }

  &__right-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__mail {
    display: flex;
    flex-direction: column;

    p {
      color: $grey-color;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }

    a {
      color: $black-color;
      color: var(--Text, #1b1b1b);
      font-family: "Ubuntu";
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      text-decoration: none;
    }
  }

  &__social-icons {
    display: flex;
    gap: 20px;

    img {
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover {
        scale: 1.1;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .footer {
    &__content {
      justify-content: center;
      gap: 20px;
      padding: 50px 1rem 70px;
    }

    &__left-wrapper,
    &__right-wrapper {
      align-items: center;
      text-align: center;
    }
  }
}
</style>
