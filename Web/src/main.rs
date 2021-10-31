use std::str::FromStr;

use yew::prelude::*;
use num_bigint::{BigInt};

enum Msg {
    Add,
    Remove,
    SetNumber(BigInt),
}

struct Model {
    // `ComponentLink` is like a reference to a component.
    // It can be used to send messages to the component
    link: ComponentLink<Self>,
    value: BigInt,
    modifier: BigInt,
}

impl Component for Model {
    type Message = Msg;
    type Properties = ();

    fn create(_props: Self::Properties, link: ComponentLink<Self>) -> Self {
        Self {
            link,
            value: BigInt::from(0),
            modifier: BigInt::from(1),
        }
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::Add => {
                self.value += &self.modifier;
                // the value has changed so we need to
                // re-render for it to appear on the page
                true
            }
            Msg::Remove => {
                self.value -= &self.modifier;
                true
            }
            Msg::SetNumber(number) => {
                self.modifier = number;
                true
            }
        }
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        // Should only return "true" if new properties are different to
        // previously received properties.
        // This component has no properties so we will always return "false".
        false
    }

    fn view(&self) -> Html {
        html! {
            <div>
                <button 
                    onclick=self.link.callback(|_| Msg::Add)>{ format!("+{}", self.modifier) }
                </button>
                <button 
                    onclick=self.link.callback(|_| Msg::Remove)>{ format!("-{}", self.modifier) }
                </button>
                <input 
                    oninput=self.link.batch_callback(
                        |input: InputData| {
                            let value = input.value;
                            let validated_input = BigInt::from_str(&value);
                            if let Ok(number) = validated_input {
                                Some(Msg::SetNumber(number))
                            } else {
                                None
                            }
                        }
                    )
                    value=self.modifier.to_string()
                />
                <p>{ self.value.to_string() }</p>
            </div>
        }
    }
}

fn main() {
    yew::start_app::<Model>();
}
