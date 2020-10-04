function page_height() {
			setTimeout(function() {
				document.getElementById('full-footer').style.marginTop = '0';
				var doc_height = document.getElementsByTagName('body')[0].offsetHeight;
				var view_height = window.innerHeight;
				if(doc_height<view_height)
				{
					document.getElementById('full-footer').style.marginTop = (view_height - doc_height) + 'px';
				}
			}, 30);
		}
function boom() {
  var opacity = document.getElementsByClassName('boom-opacity');
  for (var i = 0; i < opacity.length; i++) {
    if (window.innerHeight < 900) {
      if (window.scrollY + ((9.5 * window.innerHeight) / 10) > opacity[i].offsetTop) {
        opacity[i].style.opacity = '1';
        opacity[i].style.marginTop = '0';
      }
    } else {
      opacity[i].style.opacity = '1';
    }
  }
  var mt = document.getElementsByClassName('boom-mt');
  for (var i = 0; i < mt.length; i++) {
    if (window.innerWidth > 600 && window.innerHeight < 900) {
      if (window.innerHeight > (mt[i].getBoundingClientRect().top) + window.innerHeight - 600) {
        mt[i].style.marginTop = '0';
      }
    } else if (window.innerHeight < 900) {
      if (window.innerHeight > (mt[i].getBoundingClientRect().top) + window.innerHeight - 750) {
        mt[i].style.marginTop = '0';
      }
    } else {
      mt[i].style.marginTop = '0';
    }
  }
}


function search() {
  var search = document.getElementById('search-box').value;
  var s_len = search.length;
  var s_count = 0;

  var s_opt = document.getElementsByClassName('search-opt');

  for (var i = 0; i < s_opt.length; i++) {
    if (s_len == 0) {
      s_opt[i].style.display = 'block';
      s_count++;
    } else {
      let attr_list = s_opt[i].getAttribute('a').split(',');
      for (var j = 0; j < attr_list.length; j++) {
        if (attr_list[j].slice(0, s_len).toLowerCase() == search.toLowerCase()) {
          s_opt[i].style.display = 'block';
          s_count++;
          break;
        } else {
          s_opt[i].style.display = 'none';
        }
      }
    }
  }

  if (s_count == 0) {
    document.getElementById('no-dish').style.display = 'block';

  } else {
    document.getElementById('no-dish').style.display = 'none';
  }

  boom();

  page_height();
}
