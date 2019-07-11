import React, { Component } from 'react'
import Referral from './Referral'
export default class Books extends Component {
  render() {
  	var books = [{
	"title": "One Good Trade", 
	"fileName": "OneGoodTrade.jpg", 
	"description": `Written by SMB Capital Co-Founder, Mike Bellafiore, this book encapsulates what good trading is all about in a simple phrase: \"One Good Trade\".
	Much like basketball coaches who direct plays and judge their success by how well they executed their plan NOT by how successfull the outcome was, Mike proposes a good trade is one 
	where you follow your plan and execute it to perfection. Lose or make money be damned. I personally found it to be very helpful for a scalpers mindset 
	where most fintwit people will say overtrading is bad, but what if you trading strategy is to take many many tiny trades?`, 
	"amazonLink": "https://amzn.to/2XzK1uf"
	}, 
	{
	"title": "Reminisciences of a Stock Operator", 
	"fileName": "Reminiscences_of_a_Stock_Operator.jpg", 
	"description": `Really interesting story of a big time trader in the 1900s who started out by beating the bucket shops and then evenutually moving on to real markets. This is a really good story 
	on how to find edge wherever it may be (even if it's playing in a fake market) and how to deal with losses.`, 
	"amazonLink": "https://amzn.to/2JmHiQX"
	}
	];
  	var bookStyle = {
		width: "220px", 
		height: "346px", 
		marginRight: "50px"
	};
    return (
      <div>
        <section className="colorlib-experience" data-section="books">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <h2>Recommended Reading</h2>
				<p>
					I 100% recommend not actually reading but rather, listening to audiobooks! You can finish one of these trading books on a long drive or on your commute to work. It's really great way to spend what otherwise would've been a boring drive :D
				</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
					{books.map((book, i) => {
					return <div style={{marginBottom:"50px"}}>
						<div style={{float:"left"}}>
							<a href={book.amazonLink} target="_blank">
							<img alt={book.fileName} style={bookStyle} src={"images/Books/" + book.fileName}></img>
							</a>
						</div>
						<div>
							<p>{book.description}</p>
						</div>	
						<div style={{clear:"both"}}></div>
						<Referral/>
						</div>
					}
					)}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
