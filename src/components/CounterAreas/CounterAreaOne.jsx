import React from "react";
import { COUNTER_SHAPE01, COUNTER_SHAPE02 } from "../../lib/assets";
import { COUNTER_LIST_ONE } from "../../mocks/counter";
import { Odometer } from "../Odometer/Odometer";

export const CounterAreaOne = () => {
  return (
    <section className="counter-area counter-bg">
      <div className="container">
        <div className="row justify-content-center">
          {COUNTER_LIST_ONE.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className="counter-item">
                <h2 className="count">
                  <Odometer end={item.count} />
                  {item.suffix}
                </h2>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="counter-shape-wrap">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPhSURBVHgBlVbPThdBDG47+zN6Ep8AfAKRmBgPRjh6ErwYLwJ60oPxTzTGGMUYNdHEkycvamJiTIzgiZMBX0DgCdw3kAcQxs5M2+nwQ1Bg2dnZmX7t16/TRfiHn/jg5SR03TkINMnXGBCNQAgAHW3y8zpQSNcSXrv0fT9buCfQ/RdzEPARGxtjw8BADBJiHidAQsx3fQ7UA3ULePnC+/8CjPeepygWAWmcjUQxhgYaqIKYEwJMvI6wh62tKZy/2O+0TUNgd5/NQoQ1Ho7zxhJFuvgvXySgSOU55Du/1980x4wcOvgjflqc3hMw3n6SFrzLOUJyxjOwuzhqwh3v0tpMdxTHRjjvX+LX5dldKY03FsZgMFjjTYdZDEJfKHSVXMVMVxAK81jzKfN+TTCaN2EbJnDmbN9GGAYr2atMX4qAiueJJnK503mlG5VuKgGUdVFSkdaMwAHWg6c03no6xy9GLSckuUjUodFW59Ig00pRjIOIK2bOdE+50trxuPxtrkaI8Kh4RE4Yuhh1HC2qkicVCVYAkHeA4oQ4jSkNDzNUvPPsDL9elXwIJUE8ludOnimwQQQrgZJLqGXjc+jqlkwTUx2DTe+gzuWAVPaFpkaZQi2K7pS+9EjCAKkWSHM8zYA4LsaEvhCNVl97WmO+9kiVKXsTWMmjCg3NmRLEmS4lNIuEvGFoi5zcOJjXaJEgag06VYsDyhjm0hplKDo8FE2VfrSkm3gsumjOafnkeWNI1BuiiQ/hCJUScCcHKbBQhRZ9dEddjTqIcLxSTeEEroTKkP9tZuU1JaHUNseblk2sAsFSVDVHLUOoajXaf1FuKYDouHablVIzUiTenK1Sa+Bz51RtesjjDaaUVusi6wrYRiYbimNGj4uqti6UvAXVQYjuKNxIs0uVBqpGdusQKoBgOUHnrKjSKZ30mJQcEy3lJMTnr38myVoDtQ7RlXunzTXU5tspeNPxYfirwE6eHicmjkq3wMdCJ1bpkzsbJZdNNIhNjaJjBa2LeAYet/3w1Zu1fAj4MzS4flifi9Guq33S1lOZt0+RIPOYo2v7IW7N5BIhJxiith+qckPwHb+qVnNcIsNsndgm4lTTDzPezas9m75pJ4uJwJ2tahAAG6BW0W4/X3F7Ho8f74cAM+j1K+944/nslSnRdXE/rt81vlajYyJFNo8nTiw1GLDLT3z7cYxvK5yP0ex15z4Hi4oB/CeHqTTlM+d1HbZ+z+CpU/1O27sCGvCHz7NsbCGXzHBjrR9NnYmkZ8AFPHny/d9s7glowB8XJ2FA09ANjjHQMQY9IgDpHO45z6tA8SuePr26n60/WLDZOYwIOIQAAAAASUVORK5CYII=" alt="" class="animationFramesOne" />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIWSURBVHgBbVS9bhQxEJ4feykvj7A8AXcpIlEg7tJSkAqJAsFJNIgGhJBokJAQokHUdCgl1ZGK8u4RljfYvEHSJ5mMPbbXu7mVVrsez3wz3+cZI+x55PPPx+DxFTAtgV0L3gE430FDHXg+w9cv/k5jcATw6XsLyL/BsQIxglMAz2DfAMbhK7ru4eb6GNfP+ztA8vHbHBxttYKZBqAFOgs0EIxALgE27gKwWeGzJ12Ipwjy7ksLhFutZgZECKyOpFusLyFGW1gTmy3sIx2Ah61s/rUFCHyjIDRTJzTHDJKC1Gw2zAkk+RzAPZUiUJMPX0+UziZqYXSk6GMaiVH1UujFf8q2AH5MQO6pZdeAWH6kIVVVA9VcYaZnvgH8pQMH87jhqNIlaWIU8n+mLUk3KYDMS6fazEsljsf6DIAJlDFVKLaXtaOWorFkqstnmYDWL0YGQU9LIKoRnacMAzUDwbEm9Wmi+aBSDC/hf62IdskB4/HWlYxboKIZ+8g089G/I23C00GLFIA4riZUMDRjpFKokWYXOYsjIj9+bVXo5WSm8lyNx6NxQ18F8T33eHh43zqbZa0VXEzo5JPBsi6tUUZI5w1XZUTw/Ztejau4sVeTrCEP40F4qTfACheLfpi1APZ2rXfN1UKD+2qWpKokt0hIsIPrqwUeHXV776NypfzZ6PzxiWryQHWaJ916Xe/0tE7x0cPdNOYWiy9x23TrVE8AAAAASUVORK5CYII=" alt="" className="animationFramesOne" />
      </div>
    </section>
  );
};
