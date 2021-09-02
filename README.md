# Notify 
Generate a notification for your project. You may use this 
for async reporting onto your app or any other kind of reporting functionality.

# Installation 
`npm install notify --save`

```
import { notify } from 'notify';

notify('Your notification text')
```

## Options 

* innerText / _string_ / the text message
* stack / _boolean_ / true to stack multiple notifications
* borderColor / _string_ / the border color of the notification
* fontColor / _string_ / the font color of the notification 
* background / _string_ / the background color of the notification
* width / _string_ / the width of the notification 
* fontSize /  _string_ / the font size of the notification
* state / _boolean_ / true to let the notification visible
* container / _string_ / the container where the notification lives