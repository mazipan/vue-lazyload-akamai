/**
 * Read more about lazyLoad using IntersectionObserver
 * https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/
 * --
 * Polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill
 */
import imageConverter from 'akamai-image-converter'

const plugin = {
  /**
   * available options:
   * + useWebp: Boolean
   * + quality: Number
   * + height, width: Number
   * + fallback: String
  */
  install: (Vue, options = {}) => {
    const isSupportWebp = (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0)
    const DEFAULT_TIMEOUT = 300

    const _swapImage = (targetEl, params) => {
      // data original
      let dataSrc = targetEl.dataset.src

      // put akamai image coverter here
      if (params.useWebp && isSupportWebp) {
        dataSrc = imageConverter._withOutputFormat(dataSrc, 'webp')
      }

      let localQuality = targetEl.dataset.quality
      if (localQuality) {
        dataSrc = imageConverter._withQuality(dataSrc, localQuality)
      } else if (params.quality) {
        dataSrc = imageConverter._withQuality(dataSrc, params.quality)
      }

      let localWidth = targetEl.dataset.width
      let localHeight = targetEl.dataset.height
      if (localWidth && localHeight) {
        dataSrc = imageConverter._withDimension(dataSrc, localWidth, localHeight)
      } else if (params.width && param.height) {
        dataSrc = imageConverter._withDimension(dataSrc, params.width, params.height)
      }

      // async load image
      var newImage = new Image()
      newImage.src = dataSrc

      // when success
      newImage.onload = () => {
        if (dataSrc) {
          let timeout = params.timeout || DEFAULT_TIMEOUT
          // swap image here
          setTimeout(() => {
            targetEl.src = dataSrc
          }, timeout)
        }
      }

      // data fallback image
      const localFallback = targetEl.dataset.err
      // when image failed to fetched
      newImage.onerror = () => {
        if (localFallback) {
          targetEl.src = localFallback
        } else if (params.fallback) {
          targetEl.src = params.fallback
        }
      }
    }

    const _initObserver = (el, params) => {
      const lazyImageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          // when intersecting
          if (entry.isIntersecting) {
            const lazyImage = entry.target
            _swapImage(lazyImage, params)
            // remove observer after done
            lazyImageObserver.unobserve(lazyImage)
          }
        })
      })
      // init observer
      lazyImageObserver.observe(el)
    }

    // create vue directive for easier use in components
    Vue.directive('lazyimg', {
      bind (el) {
        // using global place holder if exist
        if (options.placeholder){
          el.src = options.placeholder
        }

        // basic flow: read from data-src attribute than move to src attr
        if ('IntersectionObserver' in window) {
          _initObserver(el, options)
        } else {
          // fallback when IntersectionObserver not supported
          _swapImage(el, options)
        }
      },
      update (el) {
        // fired when you replace with value
      }
    })
  }
}

export default plugin
