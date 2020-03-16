import React, { useEffect, useState } from 'react';

export default function BodyGame() {
    // TODO
    // order of className elements are importants, organs and labels should be in same order,
    // if first element of same className of organs is heart, then first element of labels element should be heart
    // in our case stomach, small intestine, large intestine, lungs, heart, liver and kidney
    const [clickCount, setClickCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const [labelSelected, setLabelSelected] = useState();
    const [organSelected, setOrganSelected] = useState();

    const [matchedOrgans, setMatchOrgans] = useState([]);

    const resetGame = () => {
        setMatchOrgans([]);
        setGameOver(false);
    };

    const selectOrgan = (e) => {
        console.log(e.target.parentNode.dataset.organ);
        const { organ } = e.target.parentNode.dataset;

        setOrganSelected(organ);

        // give selected a white stroke
        const organs = document.getElementsByClassName('organs');
        const organsLabels = document.getElementsByClassName('organs__labels');

        Array.from(organs).forEach((organ) => {
            organ.classList.remove('white__stroke');
        });

        // give selected organ a white stroke
        e.target.parentNode.classList.add('white__stroke');

        if (labelSelected !== undefined) {
            if (labelSelected === organ) {
                console.log('WE HAVE A MATCH');
                setMatchOrgans([
                    ...matchedOrgans, organ,
                ]);

                // reset when mismatch or match
                setOrganSelected(undefined);
                setLabelSelected(undefined);
            } else {
                console.log('WE HAVE MISSED');

                Array.from(organsLabels).forEach((organ) => {
                    organ.classList.remove('white__stroke');
                });

                Array.from(organs).forEach((organ) => {
                    organ.classList.remove('white__stroke');
                });

                // reset when mismatch or match
                setOrganSelected(undefined);
                setLabelSelected(undefined);
            }
        }
    };

    const selectLabel = (e) => {
        console.log(e.target.parentNode.dataset.organ);
        const { organ } = e.target.parentNode.dataset;
        setLabelSelected(organ);

        // give selected a white stroke
        const organs = document.getElementsByClassName('organs');
        const organsLabels = document.getElementsByClassName('organs__labels');

        Array.from(organsLabels).forEach((organ) => {
            organ.classList.remove('white__stroke');
        });

        // give selected label a white stroke
        e.target.parentNode.classList.add('white__stroke');


        if (organSelected !== undefined) {
            if (organ === organSelected) {
                console.log('WE HAVE A MATCH');
                setMatchOrgans([
                    ...matchedOrgans, organ,
                ]);

                // reset when mismatch or match
                setOrganSelected(undefined);
                setLabelSelected(undefined);
            } else {
                console.log('WE HAVE MISSED');

                Array.from(organsLabels).forEach((organ) => {
                    organ.classList.remove('white__stroke');
                });

                Array.from(organs).forEach((organ) => {
                    organ.classList.remove('white__stroke');
                });


                // reset when mismatch
                setLabelSelected(undefined);
                setOrganSelected(undefined);
            }
        }
    };

    const checkOrgan = (organ) => {
        const inArray = matchedOrgans.indexOf(organ);
        return inArray !== -1;
    };


    useEffect(() => {
        if (matchedOrgans.length === 8) {
            setGameOver(true);
        }
    }, [labelSelected, matchedOrgans, organSelected]);

    if (gameOver) {
        return (
            <div className="game__container">

                <div className="game__body--body">
                    <img className="whole__body" src="/svgs/games/lichaam/end_game/body_final.svg" alt="Lichaam met kleed" />
                </div>
                <div className="game__body--labels" onClick={() => resetGame()}>
                    <img className="whole__body--labels" src="/svgs/games/lichaam/end_game/reset_game.svg" alt="Reset Game" />

                </div>
                <div className="body__info">
                    <img src="/svgs/games/lichaam/info.svg" alt="Info van Body Game" />
                </div>
            </div>
        );
    }

    return (
        <div className="game__container">
            <div className="game__body--body">
                <svg className="whole__body" xmlns="http://www.w3.org/2000/svg" width="330.576" height="876.548" viewBox="0 0 330.576 876.548">
                    <g transform="translate(-286.535 -142.452)">
                        <ellipse cx="81.5" cy="29.5" rx="81.5" ry="29.5" transform="translate(371 960)" fill="#205455" />
                        {/* body */}
                        <g className="body">
                            <path d="M330.1,468.116c-.691-32.473-1.987-64.934-3.087-97.407a26.506,26.506,0,0,0-1.043-7.424c-7.992-24.256-7.823-49.292-11.318-73.983-4.073-28.736-9.57-57.395-28.3-83.046-2.424-7.066-9.133-10.6-17.139-12.8-19.239-5.3-38.732-9.881-58.817-12.685h0c-5.652-3.366-10.05-7.3-9.627-13.427q.571-4.589,1.114-9.178h0c28.2-17.344,34.574-43.571,44.088-68.518,3.594-9.421,3.115-18.381-4.989-26.47-.8-.794-.282-2.432-.366-3.674C238.061,25.1,214.494,5.144,171.576,1.048c-47.851-4.582-85.329,20.365-87.3,58.111-.127,2.483.31,5.094-2,7.142-6.625,5.824-4.834,12.813-4.553,19.635.254,6.182,5.92,10.88,7.16,16.678,4.3,19.993,15.222,37.043,32.911,51.737,14.066,11.686,8.076,24.409-12.15,28.8-16.406,3.571-32.883,7.117-48.472,12.749-13.94,1.882-18.436,11.238-22.636,19.7C16.661,251.606,11.757,289.443,11.08,327.791c-.085,4.672.226,9.267-1.748,13.9-5.088,11.942-6.949,24.281-7.076,36.9-.282,26.278.536,52.543-1.254,78.822-1.339,19.75-.747,39.564,12.46,57.369,2.452,3.315,5.116,8.281,11.346,6.4,6.512-1.971,2.467-6.72,2.763-10.521.437-5.53-9.937-9.331-3.3-15.411,3.087.717,6.2,3.917,9.274-.051h0c4.919-7.974.211-15.578-3.016-22.5-4.51-9.677-4.045-18.585-.775-28.237,15.913-46.988,25.413-95.077,38.323-142.591,1.353,1.792,2.692,3.571,4.045,5.363h0c2.664,31.347-3.51,62.361-5.342,93.541-3.932,66.662,1.409,133.093,14.377,199.051,2.481,12.608,9.288,25.216,8.443,37.593-3.5,51.609,7.794,101.529,24.384,150.821,5.046,15,4.383,28.633-2.41,42.636h0c-3.1,2.8-6.582,5.4-9.218,8.474-6.695,7.769-3.834,13.248,7.625,14.323,9.979.934,20.043,1.561,30.092,1.715,6.582.1,12.3-1.894,14.222-7.757h0c3.989-3.533,5.116-7.6,3.665-12.185-3.763-11.93,2.875-24.985-6.2-36.377-.7-.9-.183-2.458-.085-3.7,1-11.52,2.3-23.04,3-34.572,2.128-34.278,7.16-68.518,2.4-102.885-.817-5.888-2.636-12.006-1.452-17.689,6.075-28.928,2.537-58.035,3.693-87.039,2.819-3.7,1.9-7.77,1.945-11.75h0q.169-4.646.324-9.306c2.114-.013,4.243-.013,6.357-.026h0c1,3.712,2,7.437,3,11.149,0,3.955-.691,7.987,2.072,11.622a.013.013,0,0,0,.014.013c1.367,24.96-1.565,50.035,2.974,74.918,1.522,8.333,2.467,16.55,1.1,25.126-4.186,26.176-2.312,52.377,1.1,78.527,4.355,33.292,5.751,66.61.324,99.916-2.932,18.009,10.162,26.073,32.249,19.507,4.468,2.406,9.091.845,13.658.294,4.524-.55,10.049.051,11.938-4.454,1.9-4.557-.042-8.6-4.243-11.968-7.71-6.182-10.557-13.645-13.178-22.208-3.27-10.688,1.748-19.661,3.2-29.376h0c13.9-42.112,23.411-84.812,22.115-128.421a168.149,168.149,0,0,1,5.793-49.907c1.748-6.387,2.495-12.941,3.622-19.43,5.455-31.245,8.358-62.694,10.134-94.156,1.846-32.768,2.988-65.689-1.226-98.341-3.975-30.784-8.09-61.465-6.047-92.466h0c1.325-.563,2.65-1.126,3.975-1.677h0c3.157,17.625,10.627,34.47,13.982,52.121,6.286,33.049,19.112,64.959,28.429,97.5,1.466,5.133,1.466,9.625-.733,14.553-4.651,10.419-6.695,21.158-4.355,32.2.226,3.712,5.06,2.24,7.033,3.968h0c1.635,5.747-5.892,11.354-.451,17.165,4.679,3.123,7.837,2,9.866-2.266h0C327.688,501.754,330.465,485.14,330.1,468.116Z" transform="translate(286.487 142.493)" fill="#fac59e" stroke="#cea386" strokeMiterlimit="10" strokeWidth="1" />
                        </g>

                        {/* face */}
                        <g className="face">
                            <path d="M5362.411,1671.5s24,25.912,50.268,0" transform="translate(-4936 -1401)" fill="none" stroke="#c69191" strokeLinecap="round" strokeWidth="3" />
                            <path d="M132.582,98.074c0,4.337-1.9,7.662-3.695,8.064a1.337,1.337,0,0,1-.353.048c-1.928,0-4.064-3.47-4.064-8.112,0-4.064,1.622-7.2,3.325-7.936a.7.7,0,0,0,.08-.016,1.585,1.585,0,0,1,.386-.048,2.1,2.1,0,0,1,.707-.016C130.751,90.54,132.582,93.8,132.582,98.074Z" transform="translate(361.833 108.854)" />
                            <path d="M104.276,112.193a1.223,1.223,0,0,1-.938,1.458c-.093.009-.176.019-.26.019a1.221,1.221,0,0,1-1.2-.966,14.378,14.378,0,0,0-5.3-7.856,2.365,2.365,0,0,0-1.857-.39c-4.067.882-6.5,5.284-7.2,7.819a1.228,1.228,0,0,1-2.368-.65c.13-.427,2.721-8.181,9.035-9.555a4.8,4.8,0,0,1,3.724.724C101.992,105.424,104.081,111.274,104.276,112.193Z" transform="translate(356.973 127.358)" fill="#c69191" />
                            <path d="M69.144,98.4c0,4.659-2.731,7.9-5.173,8-1.928.1-5.462-3.952-5.462-8.594,0-4.626,3.534-7.614,5.462-7.614C66.879,89.758,69.144,93.774,69.144,98.4Z" transform="translate(354.836 108.929)" />
                        </g>

                        {/* stomach */}
                        <g className={`organs organs__stomach ${checkOrgan('stomach') ? 'disable' : ''}`} data-organ="stomach" onClick={(e) => selectOrgan(e)}>
                            <path d="M151.872,342.08s-.07-10.266-16.984-5.709-43.3-2.854-40.79-22.809,43.327-21.107,48.979-24.525,16.322-15.4,8.8-26.8-10.049-37.644-10.049-37.644h8.161s-3.143,25.1,11.3,28.518,24.609.947,30.36,14.669c9.162,21.888,1.043,40.076-21.565,45.785s-40.2,3.994-49.613-1.715c0,0-6.286,4.557-11.3,2.854s-6.286,11.4,1.254,13.683,35.8-7.411,45.85.576,3.143,13.12,3.143,13.12Z" transform="translate(324.739 205.233)" fill="#50b4a1" stroke="#33776a" strokeMiterlimit="10" strokeWidth="1" />
                        </g>

                        {/* small intestine */}
                        <g className={`organs organs__intestine--small ${checkOrgan('small_intestine') ? 'disable' : ''}`} data-organ="small_intestine" onClick={(e) => selectOrgan(e)}>
                            <path d="M93.65,387.88s19.944-15.514,54.744-12.774,11.9-10.035-21.424-10.944-24.722-9.126,2.734-10.035,47.4-13.683,18.69-14.592-42.242,1.907-44.328-11.814" transform="translate(324.624 234.109)" fill="none" stroke="#ac4364" strokeMiterlimit="10" strokeWidth="6" />
                        </g>

                        {/* large intestine */}
                        <g className={`organs organs__intestine--large ${checkOrgan('large_intestine') ? 'disable' : ''}`} data-organ="large_intestine" onClick={(e) => selectOrgan(e)}>
                            <path d="M106.127,404.264s-10.3,4.9-14.236-3.123c0,0-9.81,1.331-14.236-7.13,0,0-9.81,0-10.3-12.032,0,0-6.385-5.8-3.932-12.032,0,0-6.033-6.246-.564-10.253,0,0-3.369-7.578,1.55-12.032,0,0-2.946-6.246,2.946-8.909,0,0-1.959-7.578,3.439-9.357,0,0-2.946-13.376,7.357-14.707,0,0,7.357-4.9,12.276-2.675,0,0,5.4-2.227,7.851,2.227,0,0,7.851-.9,10.3,3.123,0,0,7.357-1.779,8.837,2.227,0,0,7.851-2.675,11.29,1.331,0,0,7.851-2.675,13.249,1.331,0,0,5.892-4.454,12.756-1.331,0,0,1.466-5.35,9.331-5.35,0,0,3.439-8.474,8.344-8.909,0,0-.493-4.9,6.385-6.682,0,0-.493-5.35,6.385-6.246,0,0,2.452-7.578,9.331-3.571,0,0,13.742-2.227,13.249,3.123,0,0,3.947,5.35.014,8.909,0,0,3.425,5.8-1.48,8.909,0,0,1.466,4.9-.987,6.682,0,0,1.875,5.235-1.015,7.219,0,0,2.9,3.955.719,7.578,0,0,2.9,4.941.719,8.23,0,0,2.537,3.571,1.085,6.554,0,0,2.537,3.981,1.085,7.6,0,0,3.947,4.941,1.607,7.9,0,0,2.72,3.622.733,5.926,0,0,2.368,5.274-.9,7.245,0,0,0,8.563-2.9,9.549,0,0,0,8.23-3.622,8.23,0,0,1.085,3.955-2.171,4.608,0,0,.719,8.23-3.256,9.216,0,0-1.818,7.9-6.526,8.883,0,0-2.537,3.955-6.159,3.955,0,0-2.9,6.259-11.6,5.274,0,0-10.515,3.827-14.137.1l-8.344-1.421s-.719,10.534-3.256,12.185-4.778,13.939-4.778,13.939l-4.877-.358-1.875-13.248s-8.837-9.062-5.074-13.606c0,0,3.34-7.193,7.921-6.067,0,0,2.918-5.683,7.921-4.173,0,0,7.921-5.683,11.684-2.278,0,0,6.258-3.789,10.43,0,0,0,5.426-5.3,9.6-2.278,0,0,2.918-4.173,6.258-3.4,0,0,.423-7.193,4.172-7.578,0,0-.423-7.193,3.34-7.193,0,0-.423-4.928,3.34-4.928a6.39,6.39,0,0,1,4.595-5.3s-2.509-6.067,0-6.822c0,0-5.835-4.928-3.34-8.333,0,0-4.172-4.173-1.663-7.961,0,0-2.509-3.789,2.086-6.067,0,0-3.749-6.067,0-9.088,0,0-4.172-4.544-1.254-7.194,0,0-2.509-4.173,0-7.194,0,0-5.426-5.3-3.34-7.193,0,0-.874-1.421-3.777-.973,0,0-3.876,6.17-7.752,6.822,0,0-1.212,3.3-6.3,2.637,0,0-2.664,5.939-7.752,4.621,0,0-4.369,4.186-8.725,1.984,0,0-6.061,4.838-10.43,2.419,0,0-6.3,3.738-10.67.883,0,0-6.3,3.3-8.725-1.1,0,0-5.821,3.968-7.752-.883,0,0-5.821,4.621-8.245-.883,0,0-5.821,2.637-8.006-1.984,0,0-5.088,3.52-7.033-1.536,0,0-4.369,2.419-6.061-1.984,0,0-3.4,1.766-4.849-.883a5.276,5.276,0,0,1-.733,5.5s-.24,4.838-3.876,4.838c0,0,2.185,5.069-.973,6.17,0,0,2.424,5.069-.24,7.488,0,0,2.9.883,2.9,3.3,0,0,4.609,1.766,2.9,5.069,0,0,4.609,4.4,1.212,6.17,0,0,4.116,1.318,2.9,3.738,0,0,3.4.218,3.636,3.3,0,0,5.328-1.318,6.3,2.2,0,0,5.581-1.766,7.033,1.1,0,0,2.664.883,2.9,2.867s2.424,2.867.24,5.069c0,0,2.213,2.355,1.818,4.851a3.632,3.632,0,0,1-.352,1.088s1.691,3.3-.973,4.621c0,0,.479,4.186-2.185,4.186C108.96,400.974,110.566,405.8,106.127,404.264Z" transform="translate(311.076 223.267)" fill="#f08b9e" stroke="#d37589" strokeMiterlimit="10" strokeWidth="1" />
                        </g>

                        {/* lungs */}
                        <g className={`organs organ__lungs ${checkOrgan('lungs') ? 'disable' : ''}`} data-organ="lungs" onClick={(e) => selectOrgan(e)}>
                            <path d="M123.084,225.111s5.892-44.288,5.441-52.16,22.27-29.248,51.544,23.577,29.359,95.769-16.082,89.138C114.359,278.4,122.661,268.465,123.084,225.111Z" transform="translate(336.36 187.701)" fill="#2dacd4" stroke="#175068" strokeMiterlimit="10" strokeWidth="1" />
                            <path d="M135.512,225.091s-6.4-44.224-6.047-52.108-22.608-29.03-51.262,24.064-28.26,96.05,17.1,88.972C144.843,278.288,136.428,268.432,135.512,225.091Z" transform="translate(310.275 187.747)" fill="#2dacd4" stroke="#175068" strokeMiterlimit="10" strokeWidth="1" />
                            <path d="M85.184,204.94s11.064,0,16.1-4.57c1.128-1.024,2.678-2.624,4.468-4.493,6.173-6.5,14.87-16.947,18.238-17.561,3.453-.627,4.1-3.136,4.1-3.136v8.461s-16.632,11.11-19.549,16.217-9.218,12.173-8.992,15.475-.042,3.776.211,4.39c.226.538-2.467.538-2.467.538s-2.467-7.757-1.579-10.816,2.016-3.059,2.016-3.059a19.11,19.11,0,0,1-12.558.2V204.94Z" transform="translate(321.152 191.399)" fill="#175068" />
                            <path d="M162.334,204.94s-11.064,0-16.1-4.57c-1.128-1.024-2.678-2.624-4.468-4.493-6.173-6.5-15.053-16.384-18.239-17.561a9.757,9.757,0,0,1-4.1-3.136v8.461s16.632,11.11,19.549,16.217,9.218,12.173,8.992,15.475-.226,4.928-.226,4.928h2.467s2.467-7.757,1.579-10.816-2.016-3.059-2.016-3.059a19.11,19.11,0,0,0,12.558.2Z" transform="translate(335.18 191.399)" fill="#175068" />
                            <path d="M121.8,140.23H115.15v53.58a9.765,9.765,0,0,1,6.653,0Z" transform="translate(333.428 181.614)" fill="#175068" />
                            <path d="M89.787,200.1c-.944-.23-4.073,1.216-4.975,3.52s-3.073,4.582-4.694,4.582-5.229.333-5.948,1.472a4.8,4.8,0,0,1,3.27-1.779c2.03-.128,3.3.09,4.5-1.254,0,0,.62-.358,3.087-4.4,1.959-3.2,3.129-3.686,4.665-3.8" transform="translate(316.648 197.912)" fill="#175068" />
                            <path d="M83.533,200.969s-.479.448-.719,2.88-1.8,5.3-2.34,7.257a2.094,2.094,0,0,0,.9,2.624s-1.128-1.37-.62-2.342,3.1-6.746,3.143-7.974a9.3,9.3,0,0,1,.958-3.341C85.013,199.728,83.533,200.969,83.533,200.969Z" transform="translate(319.18 198.352)" fill="#175068" />
                            <path d="M85.251,202.306s-4.116-.666-4.623-2.56.536-3.75,2.142-5.914c1.677-2.266,1.17-5.747.578-7.373a9.276,9.276,0,0,1,.958,4.723c-.366,2.074-1.254,3.187-1.748,4.621s-1.184,3.84.944,4.557a36.849,36.849,0,0,0,6.582,1.408Z" transform="translate(319.239 194.558)" fill="#175068" />
                            <path d="M82.457,194.64A7.021,7.021,0,0,1,79.68,193.5c-1.311-.934-.62-3.174-1.24-3.891a2.8,2.8,0,0,1,.479,1.818A2.418,2.418,0,0,0,80,193.5a17.076,17.076,0,0,0,2.664.794Z" transform="translate(318.396 195.44)" fill="#175068" />
                            <path d="M83,201.74a2.773,2.773,0,0,0,.973,1.4c.677.41,2.918.614,3.27.973a1.986,1.986,0,0,1,.507.883s-.395-.806-.888-.96a17.1,17.1,0,0,0-2.213-.461A3.617,3.617,0,0,1,82.8,202.3Z" transform="translate(320.181 198.836)" fill="#175068" />
                            <path d="M97.682,210.024c.606,1.5,4.5,5.606,3.636,7.386s-2.946,2.675-5.68,3.507c-2.847.858-4.792,3.917-5.4,5.517a9.714,9.714,0,0,1,2.41-4.275c1.677-1.434,3.143-1.83,4.5-2.7s3.51-2.394,2.312-4.134-4.172-3.674-4.4-5.3C95.06,210.024,97.456,209.473,97.682,210.024Z" transform="translate(323.228 201.087)" fill="#175068" />
                            <path d="M98.786,198.96c-.31.845,1.128,3.763,3.608,4.7s4.877,3.021,4.792,4.493.085,4.762,1.311,5.478a4.265,4.265,0,0,1-1.79-3.059c-.028-1.856.268-2.982-1.156-4.134,0,0-.352-.576-4.679-3.034-3.425-1.946-3.89-3.034-3.932-4.442" transform="translate(325.971 198.057)" fill="#175068" />
                            <path d="M104.876,206.716a2.949,2.949,0,0,0-1.254,1.19c-.268.7.042,2.726-.254,3.11-.268.346-.324.333-.818.666,0,0,.761-.538.818-1.011a11.756,11.756,0,0,0-.042-2.061c-.07-.909,1.085-2.381,1.085-2.381Z" transform="translate(328.268 200.093)" fill="#175068" />
                            <path d="M94.429,206.83a7.053,7.053,0,0,0-2.72,1.254c-1.269.986-.451,3.2-1.029,3.942a2.818,2.818,0,0,0,.395-1.843,2.41,2.41,0,0,1,.973-2.125,17.354,17.354,0,0,1,2.622-.909Z" transform="translate(323.408 200.261)" fill="#175068" />
                            <path d="M107.208,187.839a12.217,12.217,0,0,1-4.468,1.011c-2.692.128-6.033-.87-8.245-1.075s-2.734,1.178-2.734,1.178,1.339-1.2,2.452-.9,7.78,1.83,9.133,1.69a11.944,11.944,0,0,1,3.777.4C107.546,190.245,107.208,187.839,107.208,187.839Z" transform="translate(323.85 194.92)" fill="#175068" />
                            <path d="M99.033,189.98a2.632,2.632,0,0,0-.465-1.6c-.522-.576-2.579-1.382-2.791-1.818a1.962,1.962,0,0,1-.2-.973s.113.87.521,1.152a17.176,17.176,0,0,0,1.959,1.05,3.272,3.272,0,0,1,1.339,1.715Z" transform="translate(325.414 194.314)" fill="#175068" />
                            <path d="M96.757,188.49a7.685,7.685,0,0,0-2.382.858,3.291,3.291,0,0,1-2.255.384,3.219,3.219,0,0,0,1.212.1,4.69,4.69,0,0,0,1.494-.6,12.108,12.108,0,0,1,2.706-.576Z" transform="translate(323.998 195.126)" fill="#175068" />
                            <g transform="translate(469.381 379.763)">
                                <path d="M149.8,199.994c.944-.23,4.073,1.216,4.975,3.52s3.073,4.582,4.694,4.582,5.229.333,5.948,1.472a4.8,4.8,0,0,0-3.27-1.779c-2.03-.115-3.3.09-4.5-1.254,0,0-.62-.358-3.087-4.4-1.959-3.2-3.129-3.686-4.665-3.8" transform="translate(-121.766 -181.882)" fill="#175068" />
                                <path d="M152.818,200.859s.479.448.719,2.88,1.8,5.3,2.34,7.258a2.084,2.084,0,0,1-.9,2.624s1.128-1.37.62-2.342-3.1-6.746-3.143-7.974a9.3,9.3,0,0,0-.958-3.341C151.338,199.618,152.818,200.859,152.818,200.859Z" transform="translate(-121.077 -181.442)" fill="#175068" />
                                <path d="M152.584,202.2s4.116-.666,4.623-2.56-.536-3.75-2.142-5.914c-1.677-2.266-1.17-5.747-.578-7.373a9.276,9.276,0,0,0-.958,4.723c.366,2.061,1.254,3.187,1.748,4.621s1.184,3.84-.944,4.557a36.854,36.854,0,0,1-6.582,1.408Z" transform="translate(-122.605 -185.236)" fill="#175068" />
                                <path d="M153.821,194.53a7.021,7.021,0,0,0,2.777-1.139c1.311-.934.62-3.174,1.24-3.891a2.8,2.8,0,0,0-.479,1.818,2.418,2.418,0,0,1-1.085,2.074,17.072,17.072,0,0,1-2.664.794Z" transform="translate(-120.206 -184.354)" fill="#175068" />
                                <path d="M153.49,201.63a2.773,2.773,0,0,1-.973,1.4c-.677.41-2.918.614-3.27.973a1.986,1.986,0,0,0-.507.883s.395-.806.888-.96a17.089,17.089,0,0,1,2.213-.461,3.617,3.617,0,0,0,1.846-1.267Z" transform="translate(-122.2 -180.958)" fill="#175068" />
                                <path d="M140.612,209.914c-.606,1.5-4.5,5.606-3.636,7.386s2.946,2.675,5.68,3.507c2.847.858,4.792,3.917,5.4,5.517a9.715,9.715,0,0,0-2.41-4.275c-1.677-1.434-3.143-1.83-4.5-2.7s-3.51-2.394-2.312-4.134,4.172-3.674,4.4-5.3C143.248,209.914,140.838,209.363,140.612,209.914Z" transform="translate(-127.067 -178.707)" fill="#175068" />
                                <path d="M139.621,198.85c.31.845-1.128,3.763-3.608,4.7s-4.877,3.021-4.792,4.493-.085,4.762-1.311,5.478a4.265,4.265,0,0,0,1.79-3.059c.028-1.856-.268-2.982,1.156-4.134,0,0,.352-.576,4.679-3.034,3.425-1.946,3.89-3.034,3.932-4.442" transform="translate(-129.91 -181.737)" fill="#175068" />
                                <path d="M130.85,206.606a2.949,2.949,0,0,1,1.254,1.19c.268.7-.042,2.726.254,3.11.268.346.324.333.817.666,0,0-.761-.538-.817-1.011a11.754,11.754,0,0,1,.042-2.061c.07-.909-1.085-2.381-1.085-2.381Z" transform="translate(-129.525 -179.701)" fill="#175068" />
                                <path d="M141.78,206.71a7.053,7.053,0,0,1,2.72,1.254c1.268.986.451,3.2,1.029,3.942a2.818,2.818,0,0,1-.395-1.843,2.41,2.41,0,0,0-.973-2.125,17.357,17.357,0,0,0-2.622-.909Z" transform="translate(-125.148 -179.536)" fill="#175068" />
                                <path d="M132.355,187.729a12.218,12.218,0,0,0,4.468,1.011c2.692.128,6.032-.87,8.245-1.075s2.734,1.178,2.734,1.178-1.339-1.2-2.452-.9-7.78,1.83-9.133,1.69a11.942,11.942,0,0,0-3.777.4C132.031,190.135,132.355,187.729,132.355,187.729Z" transform="translate(-128.959 -184.874)" fill="#175068" />
                                <path d="M137.126,189.87a2.632,2.632,0,0,1,.465-1.6c.521-.576,2.579-1.382,2.791-1.818a1.962,1.962,0,0,0,.2-.973s-.113.87-.522,1.152a17.179,17.179,0,0,1-1.959,1.05,3.272,3.272,0,0,0-1.339,1.715Z" transform="translate(-127.105 -185.48)" fill="#175068" />
                                <path d="M139.855,188.38a7.685,7.685,0,0,1,2.382.858,3.291,3.291,0,0,0,2.255.384,3.218,3.218,0,0,1-1.212.1,4.687,4.687,0,0,1-1.494-.6,12.109,12.109,0,0,0-2.706-.576Z" transform="translate(-126.155 -184.668)" fill="#175068" />
                            </g>
                        </g>

                        {/* heart */}
                        <g className={`organs organs__heart ${checkOrgan('heart') ? 'disable' : ''}`} data-organ="heart" onClick={(e) => selectOrgan(e)}>
                            <path d="M142.363,191.916c-22.467-15.744-31.332,6.157-20.014,16.819,4.228,3.981,20.014,16.7,20.014,16.7s15.786-12.736,20.014-16.7C173.7,198.086,164.942,176.979,142.363,191.916Z" transform="translate(348.362 211.541)" fill="#d4322c" stroke="#6a1517" strokeMiterlimit="10" strokeWidth="1" />
                        </g>

                        {/* liver */}
                        <g className={`organs organs__liver ${checkOrgan('liver') ? ' disable' : ''}`} data-organ="liver" onClick={(e) => selectOrgan(e)}>
                            <path d="M71.444,320.351s-5.61-23.437-8.936-32.013-.747-35.456,41.636-37.235,52.785-2,61.453,2.189-16.829,21.568-16.829,21.568-22.115,19.149-46.132,22.861c-6.018.934-15.321,11.7-17.548,15.731C82.889,317.5,78.28,324.306,71.444,320.351Z" transform="translate(311.453 212.32)" fill="#f18a3b" stroke="#d8601d" strokeMiterlimit="10" strokeWidth="1" />
                        </g>

                        {/* kidney */}
                        <g className={`organs organs__kidney ${checkOrgan('kidney') ? 'disable' : ''}`} data-organ="kidney" onClick={(e) => selectOrgan(e)}>
                            <path d="M103.1,341.436c.7,3.891-8.231,20.377-15.716,0s14.969-27.161,19.465-21.133S101.038,330.057,103.1,341.436Z" transform="translate(321.436 231.439)" fill="#7b5aa2" stroke="#633e91" strokeMiterlimit="10" strokeWidth="2" />
                            <path d="M100.086,331.17s17.943,22.105,11.318,42.636-18.845,40.23-17.661,47.283c.9,5.389,10.923,5.248,17.055,9.062" transform="translate(324.629 235.075)" fill="none" stroke="#633e91" strokeMiterlimit="10" strokeWidth="2" />
                            <path d="M145.618,329.81s-17.942,22.105-11.318,42.636,18.845,40.23,17.661,47.283c-.9,5.389-15.039,6.989-21.17,10.8" transform="translate(339.832 234.694)" fill="none" stroke="#633e91" strokeMiterlimit="10" strokeWidth="2" />
                            <path d="M142.213,341.436c-.7,3.891,8.231,20.377,15.716,0S142.96,314.274,138.464,320.3,144.271,330.057,142.213,341.436Z" transform="translate(342.504 231.439)" fill="#7b5aa2" stroke="#633e91" strokeMiterlimit="10" strokeWidth="2" />
                        </g>

                        {/* bladder */}
                        <g className={`organs organs__bladder ${checkOrgan('bladder') ? 'disable' : ''}`} data-organ="bladder" onClick={(e) => selectOrgan(e)}>
                            <path d="M142.084,402.2a47.406,47.406,0,0,0-17.322-2.445c-4.4,0-10.36-.166-17.322,2.445-14.334,5.4-2.72,11.648,4.553,14.208,3.876,1.37,6.906,1.869,8.584,3.93l6.357-.026s1.705-2.1,10.585-3.917C145.481,414.777,154.234,406.278,142.084,402.2Z" transform="translate(327.48 254.276)" fill="#f8c146" stroke="#c9861c" strokeMiterlimit="10" strokeWidth="1" />
                        </g>

                    </g>
                </svg>
            </div>
            <div className="game__body--labels">
                <svg className="whole__body--labels" xmlns="http://www.w3.org/2000/svg" width="661" height="715" viewBox="0 0 661 715">
                    <g transform="translate(-678 -125)">

                        {/* stomach */}
                        <g className={`organs__labels ${checkOrgan('stomach') ? ' disable__label' : ''}`} data-organ="stomach" onClick={(e) => selectLabel(e)} transform="translate(-22 -140)">

                            <rect width="209" height="81" rx="40.5" transform="translate(1090 265)" fill="#d4322c" />
                            <text transform="translate(1195 316)" fill="#fff" fontSize="51" fontFamily="Laca-Bold, Laca" fontWeight="700">
                                <tspan x="-61.761" y="0">maag</tspan>
                            </text>
                            {/* position of click doesnt matter, otherwise click on text or background has different parentNode */}
                            <rect width="209" height="81" rx="40.5" transform="translate(1090 265)" fill="#d4322c" fillOpacity="0.0" />
                        </g>

                        {/* small intestine */}
                        <g className={`organs__labels ${checkOrgan('small_intestine') ? ' disable__label' : ''}`} data-organ="small_intestine" onClick={(e) => selectLabel(e)} transform="translate(-46 -129)">
                            <rect width="317" height="81" rx="40.5" transform="translate(853 888)" fill="#f8c146" />
                            <text transform="translate(1012 941)" fill="#fff" fontSize="51" fontFamily="Laca-Bold, Laca" fontWeight="700"><tspan x="-136.297" y="0">dunne darm</tspan></text>
                            {/* position of click doesnt matter, otherwise click on text or background has different parentNode */}
                            <rect width="317" height="81" rx="40.5" transform="translate(853 888)" fill="#f8c146" fillOpacity="0.0" />

                        </g>


                        {/* large intestine */}
                        <g className={`organs__labels ${checkOrgan('large_intestine') ? ' disable__label' : ''}`} data-organ="large_intestine" onClick={(e) => selectLabel(e)} transform="translate(-9 -44)">
                            <rect width="317" height="81" rx="40.5" transform="translate(687 459)" fill="#7b5aa2" />
                            <text transform="translate(846 511)" fill="#fff" fontSize="51" fontFamily="Laca-Bold, Laca" fontWeight="700"><tspan x="-126.046" y="0">dikke darm</tspan></text>
                            <rect width="317" height="81" rx="40.5" transform="translate(687 459)" fill="#7b5aa2" fillOpacity="0.0" />
                        </g>

                        {/* lungs */}
                        <g className={`organs__labels ${checkOrgan('lungs') ? ' disable__label' : ''}`} data-organ="lungs" onClick={(e) => selectLabel(e)}>
                            <rect width="247" height="81" rx="40.5" transform="translate(1000 617)" fill="#f08b9e" />
                            <text transform="translate(1124 672)" fill="#fff" fontSize="51" fontFamily="Laca-Bold, Laca" fontWeight="700"><tspan x="-75.021" y="0">longen</tspan></text>
                            <rect width="247" height="81" rx="40.5" transform="translate(1000 617)" fill="#f08b9e" fillOpacity="0.0" />
                        </g>

                        {/* heart */}
                        <g className={`organs__labels ${checkOrgan('heart') ? ' disable__label' : ''}`} data-organ="heart" onClick={(e) => selectLabel(e)}>
                            <rect width="177" height="81" rx="40.5" transform="translate(696 138)" fill="#2bb2d9" />
                            <text transform="translate(785 196)" fill="#fff" fontSize="51" fontFamily="Laca-Bold, Laca" fontWeight="700">
                                {' '}
                                <tspan x="-48.654" y="0">hart</tspan>
                            </text>
                            <rect width="177" height="81" rx="40.5" transform="translate(696 138)" fill="#2bb2d9" fillOpacity="0.0" />
                        </g>

                        {/* liver */}
                        <g className={`organs__labels ${checkOrgan('liver') ? ' disable__label' : ''}`} data-organ="liver" onClick={(e) => selectLabel(e)} transform="translate(86 -58)">
                            <rect width="171" height="81" rx="40.5" transform="translate(853 341)" fill="#f18a3b" />
                            <text transform="translate(939 396)" fill="#fff" fontSize="51" fontFamily="Laca-Bold, Laca" fontWeight="700"><tspan x="-54.264" y="0">lever</tspan></text>
                            <rect width="171" height="81" rx="40.5" transform="translate(853 341)" fill="#f18a3b" fillOpacity="0.0" />
                        </g>

                        {/* kidney */}
                        <g className={`organs__labels ${checkOrgan('kidney') ? ' disable__label' : ''}`} data-organ="kidney" onClick={(e) => selectLabel(e)} transform="translate(30 -30)">
                            <rect width="229" height="81" rx="40.5" transform="translate(1080 489)" fill="#50b4a1" />
                            <text transform="translate(1192 543)" fill="#fff" fontSize="51" fontFamily="Laca-Bold, Laca" fontWeight="700"><tspan x="-70.788" y="0">nieren</tspan></text>
                            <rect width="229" height="81" rx="40.5" transform="translate(1080 489)" fill="#50b4a1" fillOpacity="0.0" />
                        </g>

                        {/* bladder */}
                        <g className={`organs__labels ${checkOrgan('bladder') ? ' disable__label' : ''}`} data-organ="bladder" onClick={(e) => selectLabel(e)} transform="translate(21 -210)">
                            <rect width="195" height="81" rx="40.5" transform="translate(687 833)" fill="#ac4364" />
                            <text transform="translate(783 890)" fill="#fff" fontSize="51" fontFamily="Laca-Bold, Laca" fontWeight="700"><tspan x="-59.772" y="0">blaas</tspan></text>
                            <rect width="195" height="81" rx="40.5" transform="translate(687 833)" fill="#ac4364" fillOpacity="0.0" />
                        </g>
                    </g>
                </svg>
            </div>
            <div className="body__info">
                <img src="/svgs/games/lichaam/info.svg" alt="Info van Body Game" />
            </div>
        </div>
    );
}
