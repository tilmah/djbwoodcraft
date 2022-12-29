var venobox_inline = new VenoBox({
    selector: '.venoboxinline',
    // popup: ".venoboxinline",
    numeration: true,
    infinigall: true,
    // is called after gallery navigation step
    onContentLoaded: function(content){
        closeVentListener();
    //         var closeme = document.querySelector(".closeme");

    //                 console.log(closeme);

    // closeme.addEventListener('click', function(e){
    //     console.log('closeme');
    //     e.preventDefault();
    //     venobox_inline.close();
    // });
    },
    spinColor: '#FF00C4',
    maxWidth : '400px',
    border : '10px',
    bgcolor : '#f46f00'
});

// $(document).ready(function(){
//     $('.venobox').venobox();
// });

// var stoca = new VenoBox({
//     selector: '.stocaaaa',
//     popup: "#firstlink",
// });


var stobox = new VenoBox({
    // noArrows: true,
    selector: '.venobox',
    // popup: "#firstlink",
    numeration: true,
    infinigall: true,
    titleattr: 'data-title',
    share: ['facebook', 'twitter', 'linkedin', 'pinterest', 'email', 'download'],
    overlayClose: true,
    spinner: 'plane',
    spinColor: '#00B1F0',
    titleStyle: 'bar',
    shareStyle: 'pill'

    // overlayColor: 'green'

    // onInit: function(plugin){
    //     console.log('CB INIT');
    //     console.log(plugin);
    // },
   //  cb_pre_open: function(item){
   //     console.log('PRE OPEN');
   //     console.log(item);
   //  },
   // // cb_pre_open: false,
   //  cb_post_open: function(item, gallIndex, thenext, theprev){
   //      console.log('POST OPEN');
   //      console.log(item);
   //      console.log('current gallery index: ' + gallIndex);
   //      console.log(thenext);
   //      console.log(theprev);
   //  },
   //  // is called before closing, return false to prevent closing
   //  cb_pre_close: function(obj, gallIndex, thenext, theprev){
   //      console.log('PRE CLOSE');
   //      console.log('current gallery index: ' + gallIndex);
   //              console.log('PRE CLOSE next');

   //      console.log(thenext);
   //                      console.log('PRE CLOSE prev');

   //      console.log(theprev);
   //  },
   //  // is called after finished closing. 
   //  cb_post_close: function(){
   //      console.log('POST CLOSE');
   //  },
   //  // is called after gallery navigation step
   //  cb_after_nav: function(obj, gallIndex, thenext, theprev){
   //      console.log('POST NAV');
   //      console.log('current gallery index: ' + gallIndex);
   //      console.log(thenext);
   //      console.log(theprev);
   //  },
   //  // is called after gallery navigation step
   //  cb_content_loaded: function(content){
   //      console.log('CONTENT LOADED');
   //      console.log(content);
   //  },
});

// document.body.addEventListener('click', function(){
//     stobox.next();
// });
// autoselector = document.querySelector("#firstlink");
// firstveno.open(autoselector);

// // Public Methods
// venobox.open(selector);
// venobox.close();
// venobox.prev();
// venobox.next();
// venobox.destroy();

var secondveno = new VenoBox({
    selector: '.venoboxajax',
    // overlayColor: 'green'
    // cb_init: function(plugin){
    //     console.log('CB INIT AJAX');
    //     console.log(plugin);
    // },
});

var secondveno2 = new VenoBox({
    selector: '.venoboxvid',
    bgcolor: '#000',
});

function closeVentListener(){
    var closeme = document.querySelectorAll(".closeme");

    closeme.forEach(function(element){
        element.addEventListener('click', function(e){
            e.preventDefault();
            venobox_inline.close();
        });  
    });
}

var secondveno4 = new VenoBox({
    selector: '.venoboxframe',
    bgcolor: '#000',
});
