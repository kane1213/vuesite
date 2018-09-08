<template>
  <div class="backstage">
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Company name</a>
      <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" @click.prevent="signout" href="#">Sign out</a>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
            </h6>

            <MainMenu/>

              <!--<ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Current month
                  </a
                </li>
              </ul>>
            -->
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 pt-5">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">WELCOME</h1>
          </div>
          <router-view></router-view>
        </main>
        
      </div>
    </div>
  </div>
</template>
<script>
import MainMenu from '@/components/MainMenu.vue'
export default {
  name: 'backstage',
  components: {
    MainMenu
  }
}
</script>

<style lang="sass" scoped>
body, html
  background-color: #eee
.feather
  width: 16px
  height: 16px
  vertical-align: text-bottom

.sidebar
  position: fixed
  top: 0
  bottom: 0
  left: 0
  z-index: 100
  /* Behind the navbar
  padding: 48px 0 0
  /* Height of navbar
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1)

.sidebar-sticky
  position: relative
  top: 0
  height: calc(100vh - 48px)
  padding-top: .5rem
  overflow-x: hidden
  overflow-y: auto

@supports (position: -webkit-sticky) or (position: sticky)
  .sidebar-sticky
    position: -webkit-sticky
    position: sticky

.sidebar .nav-link
  font-weight: 500
  color: #333
  .feather
    margin-right: 4px
    color: #999
  &.active
    color: #007bff
  &:hover .feather, &.active .feather
    color: inherit

.sidebar-heading
  font-size: .75rem
  text-transform: uppercase

.navbar-brand
  padding-top: .75rem
  padding-bottom: .75rem
  font-size: 1rem
  background-color: rgba(0, 0, 0, 0.25)
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25)

.navbar .form-control
  padding: .75rem 1rem
  border-width: 0
  border-radius: 0

.form-control-dark
  color: #fff
  background-color: rgba(255, 255, 255, 0.1)
  border-color: rgba(255, 255, 255, 0.1)
  &:focus
    border-color: transparent
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25)
</style>
