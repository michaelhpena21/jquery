$(document).ready(function() {
    const totalQuestions = 5;
    let currentQuestion = 0;

    function updateProgress() {
        const progress = (currentQuestion / totalQuestions) * 100; 
        $('#progress-bar').val(progress);
    }

    $('#submit-btn').on('click', function(event) {
        event.preventDefault(); 
        $('#confirm-dialog').show();
    });

    $('#confirm-submit').on('click', function() {
        $('#quiz-form').submit();
    });

    $('#cancel-submit').on('click', function() {
        $('#confirm-dialog').hide();
    });

    
    $('input[type="checkbox"]').on('change', function() {
        let answeredQuestions = 0; 

        
        $('.question').each(function() {
           
            if ($(this).find('input[type="checkbox"]:checked').length > 0) {
                answeredQuestions++;
            }
        });

        
        currentQuestion = answeredQuestions; 
        updateProgress(); 
    });

   
    updateProgress();
});