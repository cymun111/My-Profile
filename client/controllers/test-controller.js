export class TestController{
  constructor(){
    this.itemClassName = "carousel__photo";
    this.items = document.getElementsByClassName(this.itemClassName);
    this.totalItems = this.items.length;
    this.moving = false;
    this.slide = 0;
    this.items[this.totalItems - 1].classList.add("prev");
    this.items[0].classList.add("active");
    this.items[1].classList.add("next");
  }
  //carousel Next button
  nextSlide(){
    if(this.moving){
    }
      if (this.moving == false) {
        // If it's the last slide, reset to 0, else +1
        if (this.slide === (this.totalItems - 1)) {
          this.slide = 0;
        } else {
          this.slide++;
        }
        // Move carousel to updated slide
        this.moveCarouselTo();
      }
    }
  // Carousel Previous Button
  movePrev() {
      if (!this.moving) {
        // If it's the first slide, set as the last slide, else -1
        if (this.slide === 0) {
          this.slide = (this.totalItems - 1);
        } else {
          this.slide--;
        }

        // Move carousel to updated slide
        this.moveCarouselTo();
      }
    }

  moveCarouselTo() {
    // Check if carousel is moving, if not, allow interaction
        if(!this.moving) {
          this.disableInteraction();
          // Update the "old" adjacent slides with "new" ones
          var newPrevious = this.slide - 1,
              newNext = this.slide + 1,
              oldPrevious = this.slide - 2,
              oldNext = this.slide + 2;
          // Test if carousel has more than three items
          if ((this.totalItems - 1) > 3) {
            // Checks and updates if the new slides are out of bounds
            if (newPrevious <= 0) {
              oldPrevious = (this.totalItems - 1);
            } else if (newNext >= (this.totalItems - 1)){
              oldNext = 0;
            }
            // Checks and updates if slide is at the beginning/end
            if (this.slide === 0) {
              newPrevious = (this.totalItems - 1);
              oldPrevious = (this.totalItems - 2);
              oldNext = (this.slide + 1);
            } else if (this.slide === (this.totalItems -1)) {
              newPrevious = (this.slide - 1);
              newNext = 0;
              oldNext = 1;
            }
            this.items[oldPrevious].className = this.itemClassName;
            this.items[oldNext].className = this.itemClassName;
            // Add new classes
            this.items[newPrevious].className = this.itemClassName + " prev";
            this.items[this.slide].className = this.itemClassName + " active";
            this.items[newNext].className = this.itemClassName + " next";
          }
       }
    }
    disableInteraction() {
      this.moving = true;
      setTimeout(() => {
        return this.moving = false;
      }, 500);
    }
}
