const btns = document.querySelectorAll('.learn-more');

var boolean = true

var prevText;

function learnMore(i, text) {


    if (!boolean) {
        document.getElementsByClassName('txt')[i].textContent = prevText
        document.getElementsByClassName('card')[i].style.height = "500px"
        document.getElementsByClassName('learn-more')[i].textContent = "learn more"
        boolean = true
    }
    else if (boolean) {
        prevText = document.getElementsByClassName('txt')[i].textContent
        document.getElementsByClassName('txt')[i].textContent = text
        document.getElementsByClassName('card')[i].style.height = "1000px"
        document.getElementsByClassName('learn-more')[i].textContent = "close"
        boolean = false
    }

}

btns.forEach((button, index) => {
    button.addEventListener('click', () => {

        var text;

        if (index == 0) {
            text = "NG School is currently accepting admissions for the upcoming academic year. We offer a wide range of programs for students of all ages, from preschool to high school. Our admissions process is designed to ensure that each student is placed in the program that best fits their needs and abilities.We take pride in our experienced faculty and staff who are dedicated to providing a nurturing environment for our students to learn and grow. We also offer a variety of extracurricular activities and programs to help our students explore their interests and develop their talents.If you're interested in applying to NG School, please visit our website or contact our admissions office for more information on the application process and requirements. We look forward to hearing from you and welcoming you to the NG School community!"
            learnMore(index, text)
        }

        else if (index == 1) {
            text = "A science fair is an exciting event that allows students to showcase their knowledge of science and technology.  At NG School's annual science fair, students can explore a wide range of scientific topics, from biology and chemistry to physics and engineering. The fair provides a platform for students to develop their critical thinking, problem-solving, and communication skills, as they present their projects to judges and visitors.  The science fair is an important part of NG School's curriculum, as it helps students to appreciate the relevance and importance of science in their daily lives. Overall, NG School's science fair is a fun and educational event that highlights the school's commitment to promoting scientific inquiry and innovation among its students."
            learnMore(index, text)
        }

        else if (index == 2) {
            text = "International Yoga Day is celebrated on 21st June every year to promote yoga and its benefits. NG School is proud to celebrate International Yoga Day with its students every year. This day serves as an opportunity to spread awareness about the importance of practicing yoga for a healthy mind and body.At NG School, we organize various yoga sessions and activities on International Yoga Day. Our expert yoga trainers guide the students through different yoga postures and breathing exercises to help them achieve a sense of calm and relaxation.We believe that incorporating yoga in our daily routine can improve our physical and mental health, reduce stress and anxiety, and promote overall well-being. "
            learnMore(index, text)
        }

        else if (index == 3) {
            text = "At NG School, we offer various scholarship opportunities to our students to help them achieve their academic goals. Our scholarships are designed to support students who excel academically, demonstrate leadership qualities, and show dedication to their community. We believe in making education accessible to all deserving students, regardless of their financial background.At NG School, we offer various scholarship opportunities to our students to help them achieve their academic goals. Our scholarships are designed to support students who excel academically, demonstrate leadership qualities, and show dedication to their community. We believe in making education accessible to all deserving students, regardless of their financial background."
            learnMore(index, text)
        }

        else if (index == 4) {
            text = "NG School has been recognized as one of the Top 100 High Schools in the country. This prestigious award is a testament to our commitment to academic excellence and dedication to student success. Our rigorous curriculum, top-notch facilities, and talented faculty have all contributed to our success. We are proud to provide our students with an outstanding education that prepares them for the challenges of college and beyond. Thank you to our faculty, staff, students, and parents for making this achievement possible.This recognition is a testament to the hard work and dedication of our students, faculty, and staff. At NG School, we are committed to providing a top-quality education that prepares our students for success in college and beyond."
            learnMore(index, text)
        }

        else {
            text = "NG School is thrilled to announce its upcoming annual function, a celebration of our students' achievements and talents. This year's event promises to be an unforgettable evening, filled with music, dance, drama, and more.Our talented students have been working hard to prepare for this event, and we can't wait to showcase their amazing skills and creativity. From classical dance to modern music, there will be something for everyone to enjoy.Mark your calendars and join us for an evening of fun, entertainment, and inspiration. We look forward to seeing you there!The event is a celebration of the school community and provides an opportunity for students, parents, and staff to come together and enjoy a night of entertainment.From musical performances to theatrical productions, the annual function at NG School is a memorable experience that leaves a lasting impression on all who attend."
            learnMore(index, text)
        }


    })
});