import Button from '../../elements/Button/button';
import { FlexCenter, H2, P, Section, Span, SpanA, SpanB } from './style';

// 어바웃 PC버전 컨텐츠 1
const AboutContent1 = () => {
    return (
        <Section>
            <FlexCenter>
                <H2>
                    VIBO Special 콘텐츠는 <br />
                    오직<Span> VIBO+</Span> 에서만
                </H2>
                <P>
                    매달 새롭게 추가되는 콘텐츠를 <br />
                    <SpanA>3가지의 멤버십으로 시작해 보세요.</SpanA>
                </P>

                <Button width='419px' height='60px'>
                    <SpanB>VIBO+ 가입하기</SpanB>
                </Button>
            </FlexCenter>
        </Section>
    );
};

export default AboutContent1;
