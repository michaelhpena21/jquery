$(document).ready(function() {
    const totalQuestions = 5;
    const correctAnswers = {
        q1: 'B',
        q2: 'A',
        q3: 'A',
        q4: 'B',
        q5: 'A'
    };

    function updateProgress() {
        let answered = 0;
        $('.question').each(function() {
            if ($(this).find('input:checked').length > 0) {
                answered++;
            }
        });
        const progress = (answered / totalQuestions) * 100;
        $('#progress-bar').val(progress);
    }

    $('#submit-btn').on('click', function(event) {
        event.preventDefault();
        $('#confirm-dialog').show();
    });

    $('#confirm-submit').on('click', function() {
        let score = 0;
        for (let q in correctAnswers) {
            const selected = $(`input[name="${q}"]:checked`).val();
            if (selected === correctAnswers[q]) {
                score++;
            }
        }

        $('#quiz-form').hide();
        $('#confirm-dialog').hide();
        $('.quiz-container').append(`
            <div id="result">
                <h2>Your score: ${score} / ${totalQuestions}</h2>
                <button id="retry-btn">Retry</button>
            </div>
        `);
    });

    $('#cancel-submit').on('click', function() {
        $('#confirm-dialog').hide();
    });

    $(document).on('click', '#retry-btn', function() {
        $('input[type="checkbox"]').prop('checked', false);
        $('#result').remove();
        $('#quiz-form').show();
        updateProgress();
    });

    $('input[type="checkbox"]').on('change', updateProgress);

    updateProgress();
});
