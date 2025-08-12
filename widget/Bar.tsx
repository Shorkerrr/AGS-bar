//import app from "ags/gtk4/app"
import {Gtk, Gdk, Astal, App} from "ags/gtk4"
import {createPoll} from "ags/time"
import { Variable } from "astal";


function doCoolStuff() {
    //////
    console.log("hey!!!!");
  }

export default function Bar(monitor = 0) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor
  const clock = createPoll("", 60000, "date +%H:%M")


  return (
  <window 
      visible
      name="bar"
      class="Bar"
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={TOP | LEFT | RIGHT}
      >

    <button 
        halign={Gtk.Align.CENTER}
      >
    <label
        label={clock} 
        halign={Gtk.Align.CENTER}
        />
</button>
  <eventbox 
        onButtonPressEvent={() => {
          doCoolStuff();
        }}
      halign={Gtk.Align.LEFT}
    >
      <label label="mysterious button" />
    </eventbox> 
  </window>

  
  );
}

