use virtual_dom_rs::prelude::*;

pub struct NotFoundView {}

impl NotFoundView {
    pub fn new() -> NotFoundView {
        NotFoundView {}
    }
}

impl View for NotFoundView {
    fn render(&self) -> VirtualNode {
        html! {
        <section class="py-8 px-4 text-center">
          <div class="max-w-auto md:max-w-lg mx-auto">
            <img class="mb-8" src="placeholders-2-0/pictures/error.svg" alt="">
            <h2 class="text-5xl mb-2 font-semibold font-heading">Page not found</h2>
            <p class="mb-6 text-gray-400">Dunder Mifflin is the place where all the paper enthusiastic met one day and started selling supplies with true love.</p>
            <div><a class="px-4 text-indigo-600 hover:underline" href="#">Link1</a><a class="px-4 text-indigo-600 hover:underline" href="#">Link1</a><a class="px-4 text-indigo-600 hover:underline" href="#">Link1</a><a class="px-4 text-indigo-600 hover:underline" href="#">Link1</a></div>
          </div>
        </section>
                }
    }
}
