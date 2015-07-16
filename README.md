[![Build Status](https://travis-ci.org/BitSyko/layers_showcase_json.svg?branch=master)](https://travis-ci.org/BitSyko/layers_showcase_json)
# layers_showcase_json
Submitting themes to the showcase
==================================

To add your themes to the new "Layers Showcase" you need to issue a pull request with your json file added to the src folder. Below is a template of the info your json file will have.

Image Sizes (Important).
=========================
icons = H=256 x W=256
screenshots = H=1920.
promo_header = W=1598 x H=1052

Failure to comply to these guidelines will result in your showcase not looking right.
======================================================================================

        {
            "title": "ELEMENT - Layers Theme",
            "description": "Element, a new way of thinking theming. Created by users for users",
            "author": "SPAstef",
            "link": "https://play.google.com/store/apps/details?id=bitsykolayers.ELEMENT",
            "icon": "http://i.imgur.com/fcBy21T.png",
            "promo": "http://i.imgur.com/UIPe5pT.png",
            "screenshot_1": "http://i.imgur.com/oJYrMXb.png",
            "screenshot_2": "http://i.imgur.com/GNcwss5.png",
            "screenshot_3": "http://i.imgur.com/gKjNJh3.png",
            "googleplus": "https://plus.google.com/+StefanoTrevisani/posts/NGVQcadWxQp",
            "version": "3.2.1",
            "donate_link": "false",
            "donate_version": "false",
            "bootani": "false",
            "font": "false",
            "wallpaper": "http://i.imgur.com/KYOD5PA.png",
            "plugin_version": "1",
            "for_L": "true",
            "for_M": "true",
            "basic": "true",
            "basic_m": "true",
            "type2": "true",
            "type3": "false",
            "type3_m": "false",
            "touchwiz": "true",
            "lg": "true",
            "sense": "true",
            "xperia": "true",
            "hdpi": "false",
            "mdpi": "false",
            "xhdpi": "true",
            "xxhdpi": "true",
            "xxxhdpi": "true",
            "free": "false",
            "donate": "false",
            "paid": "true",
            "needs_update": "false",
            "will_update": "false"
        }
        
Help adding more themes.
======================================================================================
Each themer has their own json file named author.json. To add more themes to your file you will need...

• Add a comma ( , ) after the closed bracket ( } )

• Copy and past all the theme content

        {
            "title": "Theme 1",
            ......
        },

• Edit the data for your new theme

• Make sure the last closed bracket ( } ) dosnt have a comma ( , ) after it 

        {
            "title": "Theme 1",
            ......
        },
        {
            "title": "Theme 2",
            ......
        }
