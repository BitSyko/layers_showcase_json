[![Build Status](https://travis-ci.org/BitSyko/layers_showcase_json.svg?branch=master)](https://travis-ci.org/BitSyko/layers_showcase_json)
# layers_showcase_json
Submitting layers to the showcase
==================================

To add your layers to the new "Layers Showcase" you need to issue a pull request with your json files added to your subfolder in the src folder. Below is a template of the info your json file will have.

Use the link below for the form. http://wh0cares.github.io

Validate Json before submitting
==================================
Want to be carefull and make sure your json is formatted correctly use http://jsonlint.com/ to validate your file

Image Sizes (Important).
=========================
icons = H=256 x W=256
screenshots = H=1920.
promo_header = W=1598 x H=1052

Failure to comply to these guidelines will result in your showcase not looking right.
======================================================================================

    {
        "title": "Light MIUI 6",
        "description": "Light MIUI 6 theme is here to bring you the closest look of MIUI 6 to your phone",
        "author": "Luke Walczak",
        "link": "https://play.google.com/store/apps/details?id=alter.MIUIv6Light",
        "backup_link": false,
        "icon": "https://dl.dropbox.com/s/googj865dspt449/icon.png?dl=0",
        "promo": "https://dl.dropbox.com/s/o0vz4m5x9864i3g/heroimage.png?dl=0",
        "screenshot_1": "https://dl.dropbox.com/s/cxeiits8o3qxywv/screenshot1.png?dl=0",
        "screenshot_2": "https://dl.dropbox.com/s/fnfs3gdfj4pug2i/screenshot2.png?dl=0",
        "screenshot_3": "https://dl.dropbox.com/s/4nkvemk5p4t9p1d/screenshot3.png?dl=0",
        "googleplus": "https://plus.google.com/+LukeWalczak/posts/A5G6nk1DnDy",
        "version": "3.0.3",
        "toolbar_background_color": "757575",
        "donate_link": false,
        "donate_version": false,
        "bootani": false,
        "font": false,
        "wallpaper": false,
        "plugin_version": "1",
        "for_L": true,
        "for_M": false,
        "basic": true,
        "basic_m": false,
        "type2": true,
        "type3": false,
        "type3_m": false,
        "touchwiz": false,
        "lg": false,
        "sense": false,
        "xperia": false,
        "zenui": false,
        "hdpi": true,
        "mdpi": false,
        "xhdpi": true,
        "xxhdpi": true,
        "xxxhdpi": true,
        "free": false,
        "donate": false,
        "paid": true,
        "needs_update": false,
        "will_update": true,
        "iconpack": "false"
    }
        
Help adding more layers.
======================================================================================
Inside the src folder each themer has their own subfolder filled with their own layers json files. To add another layer to the showcase you will need to...

• Each layer has its own json file so just copy the content of one of your already made json files
        
    {
        "title": "Layers 1",
        ......
    }

•  Paste all the layers content to a new json file and edit it
    
    {
        "title": "Layers 2",
        ......
    }
    
•  Once your done rename you json files to the layers title name. Please remove spaces from the file name

•  At the end you should have src/authors_name/Layers_1.json and src/authors_name/Layers_2.json
